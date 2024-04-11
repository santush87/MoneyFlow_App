package com.martin.aleksandrov.backend.controllers;

import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PostMapping()
    public UserViewDto createUser(@RequestBody UserRegistrationDto userRegistrationDto) {
        return this.userService.register(userRegistrationDto);
    }

    @GetMapping("/all")
    public List<UserViewDto> getAllUsers() {
        return this.userService.getAll();
    }
}
