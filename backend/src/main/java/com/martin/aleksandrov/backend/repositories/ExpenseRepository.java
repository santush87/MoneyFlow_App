package com.martin.aleksandrov.backend.repositories;

import com.martin.aleksandrov.backend.models.entities.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, String> {

    Optional<ExpenseEntity> findByName(String name);
}
