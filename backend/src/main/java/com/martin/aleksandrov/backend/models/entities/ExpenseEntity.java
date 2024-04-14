package com.martin.aleksandrov.backend.models.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "expense")
@Setter
@Getter
public class ExpenseEntity extends BaseEntity{

    @Column(unique = true, nullable = false)
    @Size(min = 2, max = 50)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany
    private Set<DateAndSum> amounts;

    public ExpenseEntity() {
        this.amounts = new HashSet<>();
    }
}
