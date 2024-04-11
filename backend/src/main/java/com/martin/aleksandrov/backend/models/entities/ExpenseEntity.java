package com.martin.aleksandrov.backend.models.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigDecimal;

@Entity
@Table(name = "expenses")
@Setter
@Getter
public class ExpenseEntity extends BaseEntity{

    @Column(unique = true, nullable = false)
    @Size(min = 2, max = 50)
    private String name;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column
    private String description;
}
