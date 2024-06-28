package com.martin.aleksandrov.backend.models.dtos.view;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserViewDto {

    private String firstName;
    private String lastName;
    private String email;
    private String createdOn;

}
