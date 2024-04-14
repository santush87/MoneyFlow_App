package com.martin.aleksandrov.backend.services;

import com.martin.aleksandrov.backend.models.dtos.binding.CreateCategoryDto;
import com.martin.aleksandrov.backend.models.dtos.view.CategoryViewDto;
import org.apache.coyote.BadRequestException;

public interface CategoryService {

    CategoryViewDto addCategory(CreateCategoryDto categoryDto) throws BadRequestException;
}
