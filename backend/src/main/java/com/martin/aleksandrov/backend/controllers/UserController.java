package com.martin.aleksandrov.backend.controllers;

import com.martin.aleksandrov.backend.models.dtos.UserRegistrationDto;
import com.martin.aleksandrov.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @GetMapping()
    public boolean createUser(@RequestBody UserRegistrationDto userRegistrationDto) {
        return this.userService.register(userRegistrationDto);
    }
}
