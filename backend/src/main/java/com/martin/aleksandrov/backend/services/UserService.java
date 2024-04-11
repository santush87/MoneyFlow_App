package com.martin.aleksandrov.backend.services;

import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {

    UserViewDto register(UserRegistrationDto userRegistrationDto);
    List<UserViewDto> getAll();
    boolean isAdmin(UserEntity userEntity);
    Optional<UserEntity> findById(String id);
    Optional<UserEntity> findByEmail(String email);
//    UserDetailsDto getUserDetails(String username);
}
