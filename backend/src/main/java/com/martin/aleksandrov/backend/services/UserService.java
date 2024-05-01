package com.martin.aleksandrov.backend.services;

import com.martin.aleksandrov.backend.exceptions.UserNotFoundException;
import com.martin.aleksandrov.backend.models.dtos.LoginRequest;
import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;
import com.martin.aleksandrov.backend.token.AuthResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.BadRequestException;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface UserService {

    AuthResponse register(UserRegistrationDto userRegistrationDto) throws BadRequestException;

    List<UserViewDto> getAll();

    boolean isAdmin(UserEntity userEntity);

    Optional<UserEntity> findById(String id);

    Optional<UserEntity> findByEmail(String email);

    void delete(String id) throws UserNotFoundException;

    AuthResponse authenticate(LoginRequest request);

    void saveUserToken(UserEntity user, String jwtToken);

    void revokeAllUserTokens(UserEntity user);

    void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException;

}
