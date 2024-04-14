package com.martin.aleksandrov.backend.repositories;

import com.martin.aleksandrov.backend.models.entities.DateAndSum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DateAndSumRepository extends JpaRepository<DateAndSum, Long> {

}
