package com.martin.aleksandrov.backend.services;

import com.martin.aleksandrov.backend.models.dtos.ExpenseViewDto;
import com.martin.aleksandrov.backend.models.dtos.binding.CreateExpenseDto;
import org.apache.coyote.BadRequestException;

public interface ExpenseService {

    ExpenseViewDto createExpense(CreateExpenseDto createExpenseDto) throws BadRequestException;
}
