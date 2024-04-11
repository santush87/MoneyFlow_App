package com.martin.aleksandrov.backend.services.impl;

import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;
import com.martin.aleksandrov.backend.models.entities.UserRoleEntity;
import com.martin.aleksandrov.backend.models.enums.UserRole;
import com.martin.aleksandrov.backend.repositories.UserRepository;
import com.martin.aleksandrov.backend.repositories.UserRoleRepository;
import com.martin.aleksandrov.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserRoleRepository roleRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserViewDto register(UserRegistrationDto userRegistrationDto) throws BadRequestException {
        Optional<UserEntity> optionalUser = this.userRepository.findByEmail(userRegistrationDto.getEmail());
        if (optionalUser.isPresent()) {
            throw new BadRequestException("Duplicate identifier");
        }

        if (!userRegistrationDto.getPassword().equals(userRegistrationDto.getConfirmPassword())){
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
            UserViewDto viewDto = this.modelMapper.map(userEntity, UserViewDto.class);
            return viewDto;
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
}
