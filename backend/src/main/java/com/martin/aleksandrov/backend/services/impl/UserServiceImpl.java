package com.martin.aleksandrov.backend.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.martin.aleksandrov.backend.config.JwtService;
import com.martin.aleksandrov.backend.exceptions.UserNotFoundException;
import com.martin.aleksandrov.backend.models.dtos.LoginRequest;
import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;
import com.martin.aleksandrov.backend.models.entities.UserRoleEntity;
import com.martin.aleksandrov.backend.models.enums.UserRole;
import com.martin.aleksandrov.backend.repositories.UserRepository;
import com.martin.aleksandrov.backend.repositories.UserRoleRepository;
import com.martin.aleksandrov.backend.services.UserService;
import com.martin.aleksandrov.backend.token.AuthResponse;
import com.martin.aleksandrov.backend.token.Token;
import com.martin.aleksandrov.backend.token.TokenRepository;
import com.martin.aleksandrov.backend.token.TokenType;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserRoleRepository roleRepository;
    private final TokenRepository tokenRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(UserRegistrationDto userRegistrationDto) throws BadRequestException {
        Optional<UserEntity> optionalUser = this.userRepository.findByEmail(userRegistrationDto.getEmail());
        if (optionalUser.isPresent()) {
            throw new BadRequestException("Duplicate identifier");
        }

        if (!userRegistrationDto.getPassword().equals(userRegistrationDto.getConfirmPassword())) {
            throw new BadRequestException("Passwords do not match");
        }

        if (userRegistrationDto.getPassword().length() < 8) {
            throw new BadRequestException("Password must be at least 8 characters");
        }

        UserEntity userToSave = this.modelMapper.map(userRegistrationDto, UserEntity.class);
        userToSave.setPassword(this.passwordEncoder.encode(userRegistrationDto.getPassword()));
        userToSave.getRoles().add(this.roleRepository.findByRole(UserRole.USER));

        if (this.userRepository.count() == 0) {
            userToSave.getRoles().add(this.roleRepository.findByRole(UserRole.ADMIN));
        }
        try {
            UserEntity userEntity = this.userRepository.save(userToSave);
            String jwtToken = jwtService.generateToken(userEntity);
            saveUserToken(userEntity, jwtToken);

            return AuthResponse.builder()
                    .token(jwtToken)
                    .build();

        } catch (Exception e) {
            throw new BadRequestException("Something went wrong" + e.getMessage());
        }
    }

    @Override
    public List<UserViewDto> getAll() {
        List<UserEntity> all = this.userRepository.findAll();

        List<UserViewDto> userViewDtos = new ArrayList<>();
        for (UserEntity user : all) {
            UserViewDto dto = this.modelMapper.map(user, UserViewDto.class);
            userViewDtos.add(dto);
        }
        return userViewDtos;
    }

    @Override
    public boolean isAdmin(UserEntity userEntity) {
        return userEntity
                .getRoles()
                .stream()
                .map(UserRoleEntity::getRole)
                .anyMatch(role -> UserRole.ADMIN == role);
    }

    @Override
    public Optional<UserEntity> findById(String id) {
        return this.userRepository.findById(id);
    }

    @Override
    public Optional<UserEntity> findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public void delete(String id) throws UserNotFoundException {
        Optional<UserEntity> user = this.findById(id);
        if (user.isPresent()) {
            this.userRepository.deleteById(id);
        } else {
            throw new UserNotFoundException("Missing user with such id");
        }
    }

    @Override
    public AuthResponse authenticate(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        UserEntity user = this.userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        String jwtToken = jwtService.generateToken(user);

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    @Override
    public void saveUserToken(UserEntity user, String jwtToken) {
        Token token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    @Override
    public void revokeAllUserTokens(UserEntity user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {

        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;

        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);

        userEmail = jwtService.extractUsername(refreshToken);

        if (userEmail != null) {
            UserEntity user = this.userRepository.findByEmail(userEmail)
                    .orElseThrow();

            if (jwtService.isTokenValid(refreshToken, user)) {
                String accessToken = jwtService.generateToken(user);

                revokeAllUserTokens(user);

                saveUserToken(user, accessToken);

                var authResponse = AuthResponse.builder()
                        .token(accessToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}
