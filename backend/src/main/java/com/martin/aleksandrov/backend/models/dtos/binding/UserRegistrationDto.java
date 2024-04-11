package com.martin.aleksandrov.backend.models.dtos.binding;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class UserRegistrationDto {

    @Size(min = 2, max = 20, message = "First name must be between 2 and 20 characters!")
    private String firstName;

    //    @NotBlank
    @Size(min = 2, max = 20, message = "Last name must be between 2 and 20 characters!")
    private String lastName;

    @Email
    @NotBlank(message = "Email cannot be empty!")
    private String email;

    @NotNull
    @Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters!")
    private String password;

    @NotNull(message = "Confirm password could not be null!")
    private String confirmPassword;
}
