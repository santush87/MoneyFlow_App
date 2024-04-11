package com.martin.aleksandrov.backend.repositories;

import com.martin.aleksandrov.backend.models.entities.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, String> {
}
