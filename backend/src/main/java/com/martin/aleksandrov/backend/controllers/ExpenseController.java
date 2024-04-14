package com.martin.aleksandrov.backend.controllers;

import com.martin.aleksandrov.backend.models.dtos.ExpenseViewDto;
import com.martin.aleksandrov.backend.models.dtos.binding.CreateExpenseDto;
import com.martin.aleksandrov.backend.services.ExpenseService;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    @PostMapping("create")
    public ResponseEntity<ExpenseViewDto> createExpense(@RequestBody CreateExpenseDto expense) throws BadRequestException {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.expenseService.addExpense(expense));
    }
}
