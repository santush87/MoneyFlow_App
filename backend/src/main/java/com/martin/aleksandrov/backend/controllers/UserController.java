package com.martin.aleksandrov.backend.controllers;

import com.martin.aleksandrov.backend.exceptions.UserNotFoundException;
import com.martin.aleksandrov.backend.models.dtos.binding.UserRegistrationDto;
import com.martin.aleksandrov.backend.models.dtos.view.UserViewDto;
import com.martin.aleksandrov.backend.services.UserService;
import com.martin.aleksandrov.backend.token.AuthRequest;
import com.martin.aleksandrov.backend.token.AuthResponse;
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
    public ResponseEntity<AuthResponse> register(@RequestBody UserRegistrationDto userRegistrationDto) {
        try {
            AuthResponse authResponse = this.userService.register(userRegistrationDto);
            return new ResponseEntity<>(authResponse, HttpStatus.CREATED);

        } catch (Exception e) {
            AuthResponse response = AuthResponse.builder()
                    .accessToken(e.getMessage())
                    .build();
            return new ResponseEntity<>(
                    response,
                    HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/auth")
    public ResponseEntity<AuthResponse> authenticate(
            @RequestBody AuthRequest request
    ) throws BadRequestException {
        return ResponseEntity.ok(userService.authenticate(request));
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
