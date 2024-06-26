package com.martin.aleksandrov.backend.models.dtos.binding;

import com.martin.aleksandrov.backend.annotation.StringDateInPastOrPresent;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateDateAndSumDto {

    @StringDateInPastOrPresent
    private String addedOn;

    @Positive
    private BigDecimal amount;
}
