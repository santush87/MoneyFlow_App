package com.martin.aleksandrov.backend.controllers;

import com.martin.aleksandrov.backend.exceptions.UserNotFoundException;
import com.martin.aleksandrov.backend.models.dtos.AuthRequest;
import com.martin.aleksandrov.backend.models.dtos.AuthResponse;
import com.martin.aleksandrov.backend.models.dtos.RegisterRequest;
import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.services.UserService;
import com.nimbusds.openid.connect.sdk.AuthenticationRequest;
import com.nimbusds.openid.connect.sdk.AuthenticationResponse;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
//    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserViewDto> createUser(@RequestBody UserRegistrationDto userRegistrationDto) throws BadRequestException {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.userService.register(userRegistrationDto));
    }

    @PostMapping("/register/new")
//    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(this.userService.registerSecond(request));
    }

    @PostMapping("/authenticate")
//    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<AuthResponse> register(
            @RequestBody AuthRequest request) {
        return ResponseEntity.ok(this.userService.authenticate(request));
    }

    @GetMapping("/all")
    public List<UserViewDto> getAllUsers() {
        return this.userService.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id) throws UserNotFoundException {
        try {
            this.userService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
