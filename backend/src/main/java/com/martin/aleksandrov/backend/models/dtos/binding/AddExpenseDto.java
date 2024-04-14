package com.martin.aleksandrov.backend.models.dtos.binding;

import com.martin.aleksandrov.backend.annotation.StringDateInPastOrPresent;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;

@Getter
public class AddExpenseDto {

    @NotNull
    @Length(min = 2, max = 50)
    private String name;

    private String description;

    @StringDateInPastOrPresent
    private String addedOn;

    @Positive
    private BigDecimal amount;

}
