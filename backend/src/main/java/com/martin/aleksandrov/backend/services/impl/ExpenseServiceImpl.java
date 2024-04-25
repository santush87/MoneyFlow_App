package com.martin.aleksandrov.backend.services.impl;

import com.martin.aleksandrov.backend.models.dtos.ExpenseViewDto;
import com.martin.aleksandrov.backend.models.dtos.binding.CreateDateAndSumDto;
import com.martin.aleksandrov.backend.models.dtos.binding.CreateExpenseDto;
import com.martin.aleksandrov.backend.models.entities.DateAndSum;
import com.martin.aleksandrov.backend.models.entities.ExpenseEntity;
import com.martin.aleksandrov.backend.repositories.DateAndSumRepository;
import com.martin.aleksandrov.backend.repositories.ExpenseRepository;
import com.martin.aleksandrov.backend.services.ExpenseService;
import jakarta.transaction.Transactional;
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
    public ExpenseViewDto createExpense(CreateExpenseDto createExpenseDto) throws BadRequestException {
        Optional<ExpenseEntity> optionalExpense =
                this.expenseRepository.findByName(createExpenseDto.getName());

        if (optionalExpense.isPresent()) {
            throw new BadRequestException("There is already an expense with that name");
        }

        ExpenseEntity expenseToSave = this.modelMapper.map(createExpenseDto, ExpenseEntity.class);

        ExpenseEntity expense = this.expenseRepository.save(expenseToSave);

        return this.modelMapper.map(expense, ExpenseViewDto.class);
    }

    @Override
    @Transactional
    public String addToExpense(Long expenseId, CreateDateAndSumDto dateAndSumDto) throws BadRequestException {
        Optional<ExpenseEntity> optionalExpense =
                this.expenseRepository.findById(expenseId);

        if (optionalExpense.isPresent()) {
            try {
                DateAndSum dateAndSum = this.modelMapper.map(dateAndSumDto, DateAndSum.class);
                dateAndSum.setExpenseEntity(optionalExpense.get());

                this.dateAndSumRepository.save(dateAndSum);

                optionalExpense.get().getAmounts().add(dateAndSum);

                this.expenseRepository.save(optionalExpense.get());
                return "Successfully added expense";
            } catch (Exception e) {
                throw new BadRequestException("Enter correct data!");
            }

        } else {
            throw new BadRequestException("There isn't an expense with that name");
        }
    }

}
