package com.martin.aleksandrov.backend.models.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class CreateExpenseDto extends BaseInfoDto {

    @NotNull
    private BigDecimal amount;
}
