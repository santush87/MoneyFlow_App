package com.martin.aleksandrov.backend.repositories;

import com.martin.aleksandrov.backend.models.entities.UserRoleEntity;
import com.martin.aleksandrov.backend.models.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {

    UserRoleEntity findByRole(UserRole role);

    List<UserRoleEntity> findAllByRoleIn(List<UserRole> roles);
}
