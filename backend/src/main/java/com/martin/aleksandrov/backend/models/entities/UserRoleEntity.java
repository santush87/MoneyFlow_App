package com.martin.aleksandrov.backend.models.entities;

import com.martin.aleksandrov.backend.models.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "roles")
@Entity
@Data
@NoArgsConstructor
public class UserRoleEntity extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private UserRole role;

    public UserRoleEntity(UserRole role) {
        this.role = role;
    }
}
