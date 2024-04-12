package com.martin.aleksandrov.backend.services;

import com.martin.aleksandrov.backend.exceptions.UserNotFoundException;
import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;
import org.apache.coyote.BadRequestException;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

public interface UserService {

    UserViewDto register(UserRegistrationDto userRegistrationDto) throws BadRequestException;
    List<UserViewDto> getAll();
    boolean isAdmin(UserEntity userEntity);
    Optional<UserEntity> findById(String id);
    Optional<UserEntity> findByEmail(String email);
    void delete(String id) throws UserNotFoundException;
//    UserDetailsDto getUserDetails(String username);
}
