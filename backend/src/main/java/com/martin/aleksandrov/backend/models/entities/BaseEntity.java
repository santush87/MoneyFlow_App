package com.martin.aleksandrov.backend.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

@MappedSuperclass
@Getter
@Setter
public class BaseEntity {

    @Id
//    @GeneratedValue(generator = "uuid-string")
//    @GenericGenerator(name = "uuid-string",
//            strategy = "org.hibernate.id.UUIDGenerator")
    @UuidGenerator
    private String id;

    @Column(unique = true, nullable = false)
    @Size(min = 2, max = 50)
    private String name;

    @Column
    private String description;
}
