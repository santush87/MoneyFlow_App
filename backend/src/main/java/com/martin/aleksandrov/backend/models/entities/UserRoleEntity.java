package com.martin.aleksandrov.backend.models.entities;

import com.martin.aleksandrov.backend.models.enums.UserRole;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "roles")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class UserRoleEntity extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private UserRole role;

    public UserRoleEntity(UserRole role) {
        this.role = role;
    }
}
