package com.martin.aleksandrov.backend.controllers;

import com.martin.aleksandrov.backend.models.dtos.binding.CreateCategoryDto;
import com.martin.aleksandrov.backend.models.dtos.view.CategoryViewDto;
import com.martin.aleksandrov.backend.services.CategoryService;
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
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping("/create")
    public ResponseEntity<CategoryViewDto> createCategory(@RequestBody CreateCategoryDto category) throws BadRequestException {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.categoryService.addCategory(category));
    }
}
