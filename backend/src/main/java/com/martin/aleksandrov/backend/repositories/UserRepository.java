package com.martin.aleksandrov.backend.repositories;

import com.martin.aleksandrov.backend.models.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
}

