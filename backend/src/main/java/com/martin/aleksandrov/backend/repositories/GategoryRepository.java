package com.martin.aleksandrov.backend.repositories;

import com.martin.aleksandrov.backend.models.entities.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GategoryRepository extends JpaRepository<CategoryEntity, String> {
}
