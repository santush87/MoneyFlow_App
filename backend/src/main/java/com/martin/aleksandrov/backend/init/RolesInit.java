package com.martin.aleksandrov.backend.init;

import com.martin.aleksandrov.backend.models.entities.UserRoleEntity;
import com.martin.aleksandrov.backend.models.enums.UserRole;
import com.martin.aleksandrov.backend.repositories.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Configuration
@RequiredArgsConstructor
public class RolesInit implements CommandLineRunner {

    private final UserRoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
//        boolean hasRoles = this.roleRepository.count() > 0;
//
//        if (!hasRoles) {
//            Set<UserRoleEntity> userRoles = new HashSet<>();
//
//            Arrays.stream(UserRole.values())
//                    .forEach(role -> userRoles.add(new UserRoleEntity(role)));
//
//            this.roleRepository.saveAll(userRoles);
//        }
    }



}
