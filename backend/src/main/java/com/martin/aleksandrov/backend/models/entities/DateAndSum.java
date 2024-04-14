package com.martin.aleksandrov.backend.models.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "date_and_sum")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DateAndSum extends BaseEntity{

    @Column(nullable = false)
    private LocalDate addedOn;

    @Column(nullable = false)
    private BigDecimal amount;

    @ManyToOne
    private ExpenseEntity expenseEntity;
}
