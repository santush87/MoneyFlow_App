package com.martin.aleksandrov.backend.models.dtos;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseInfoDto {

    @NotNull
    @Size(min = 2, max = 50, message = "Name should be between 2 and 50 characters!")
    private String name;

    private String description;
}
