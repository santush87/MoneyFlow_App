package com.martin.aleksandrov.backend.models.dtos.binding;

import com.martin.aleksandrov.backend.models.dtos.BaseInfoDto;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

public class CreateCategoryDto extends BaseInfoDto {


    @Length(min = 2, max = 50, message = "Name should be between 2 and 50 characters!")
    @NotNull
    private String name;

    private String description;

}
