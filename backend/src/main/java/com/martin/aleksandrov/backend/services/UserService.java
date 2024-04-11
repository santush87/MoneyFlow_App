package com.martin.aleksandrov.backend.services;

import com.martin.aleksandrov.backend.models.dtos.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {

    boolean register(UserRegistrationDto userRegistrationDto);
    List<UserRegistrationDto> getAll();
    boolean isAdmin(UserEntity userEntity);
    Optional<UserEntity> findById(String id);
    Optional<UserEntity> findByEmail(String email);
//    UserDetailsDto getUserDetails(String username);
}
