package com.martin.aleksandrov.backend.services.impl;

import com.martin.aleksandrov.backend.models.dtos.ExpenseViewDto;
import com.martin.aleksandrov.backend.models.dtos.binding.CreateExpenseDto;
import com.martin.aleksandrov.backend.models.entities.ExpenseEntity;
import com.martin.aleksandrov.backend.repositories.DateAndSumRepository;
import com.martin.aleksandrov.backend.repositories.ExpenseRepository;
import com.martin.aleksandrov.backend.services.ExpenseService;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final DateAndSumRepository dateAndSumRepository;
    private final ModelMapper modelMapper;

    @Override
    public ExpenseViewDto addExpense(CreateExpenseDto createExpenseDto) throws BadRequestException {
        Optional<ExpenseEntity> optionalExpense =
                this.expenseRepository.findByName(createExpenseDto.getName());

        if (optionalExpense.isPresent()) {
            throw new BadRequestException("There is already an expense with that name");
        }

        ExpenseEntity expenseToSave = this.modelMapper.map(createExpenseDto, ExpenseEntity.class);

        ExpenseEntity expense = this.expenseRepository.save(expenseToSave);

        return this.modelMapper.map(expense, ExpenseViewDto.class);
    }
}
