package com.martin.aleksandrov.backend.services.impl;

import com.martin.aleksandrov.backend.models.dtos.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;
import com.martin.aleksandrov.backend.services.UserService;

import java.util.List;
import java.util.Optional;

public class UserServiceImpl implements UserService {
    @Override
    public boolean register(UserRegistrationDto userRegistrationDto) {
        return false;
    }

    @Override
    public List<UserRegistrationDto> getAll() {
        return List.of();
    }

    @Override
    public boolean isAdmin(UserEntity userEntity) {
        return false;
    }

    @Override
    public Optional<UserEntity> findById(String id) {
        return Optional.empty();
    }

    @Override
    public Optional<UserEntity> findByEmail(String email) {
        return Optional.empty();
    }
}
