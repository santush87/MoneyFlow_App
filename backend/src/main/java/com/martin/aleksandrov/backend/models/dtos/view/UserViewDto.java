package com.martin.aleksandrov.backend.models.dtos.view;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UserViewDto {

    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate createdOn;

}
