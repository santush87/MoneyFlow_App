package com.martin.aleksandrov.backend.services.impl;

import com.martin.aleksandrov.backend.exceptions.ExistingCategoryException;
import com.martin.aleksandrov.backend.models.dtos.binding.CreateCategoryDto;
import com.martin.aleksandrov.backend.models.dtos.view.CategoryViewDto;
import com.martin.aleksandrov.backend.models.entities.CategoryEntity;
import com.martin.aleksandrov.backend.repositories.CategoryRepository;
import com.martin.aleksandrov.backend.services.CategoryService;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    @Override
    public CategoryViewDto addCategory(CreateCategoryDto categoryDto) throws BadRequestException {
        Optional<CategoryEntity> optionalCategory = this.categoryRepository.findByName(categoryDto.getName());
        if (optionalCategory.isPresent()) {
            throw new BadRequestException("There is already a category with that name");
        }

        if ((categoryDto.getName().length() < 2) || (categoryDto.getName().length() > 50)) {
            throw new BadRequestException("Category name must be between 2 and 50 characters");
        }

        CategoryEntity categoryEntity = categoryRepository.save(this.modelMapper.map(categoryDto, CategoryEntity.class));

        return this.modelMapper.map(categoryEntity, CategoryViewDto.class);
    }


}
