package com.martin.aleksandrov.backend.services.impl;

import com.martin.aleksandrov.backend.models.dtos.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.entities.UserEntity;
import com.martin.aleksandrov.backend.models.entities.UserRoleEntity;
import com.martin.aleksandrov.backend.models.enums.UserRole;
import com.martin.aleksandrov.backend.repositories.UserRepository;
import com.martin.aleksandrov.backend.repositories.UserRoleRepository;
import com.martin.aleksandrov.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserRoleRepository roleRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public boolean register(UserRegistrationDto userRegistrationDto) {
        Optional<UserEntity> optionalUser = this.userRepository.findByEmail(userRegistrationDto.getEmail());
        if (!optionalUser.isPresent()) {
            UserEntity userToSave = this.modelMapper.map(optionalUser, UserEntity.class);
//            TODO: Add password Encoder!!!
            userToSave.setPassword(this.passwordEncoder.encode(userRegistrationDto.getPassword()));
            userToSave.getRoles().add(this.roleRepository.findByRole(UserRole.USER));
            if(this.userRepository.count()==0){
                userToSave.getRoles().add(this.roleRepository.findByRole(UserRole.ADMIN));
            }
            this.userRepository.save(userToSave);
        }
        return false;
    }

    @Override
    public List<UserRegistrationDto> getAll() {
        return List.of();
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
