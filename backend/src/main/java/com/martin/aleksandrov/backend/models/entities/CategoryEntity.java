package com.martin.aleksandrov.backend.models.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "category_type")
@Setter
@Getter
public class CategoryEntity extends BaseEntity{

    @Column(unique = true, nullable = false)
    @Size(min = 2, max = 50)
    private String name;

    @Column
    private String description;

    @ManyToMany
    private List<ExpenseEntity> expenses;

    public CategoryEntity() {
        this.expenses = new ArrayList<>();
    }
}
