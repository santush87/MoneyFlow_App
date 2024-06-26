package com.martin.aleksandrov.backend.config;

import com.martin.aleksandrov.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Configuration
@AllArgsConstructor
public class AppConfig {

    private final UserRepository userRepository;

    @Bean
    public ModelMapper modelMapper() {
        final ModelMapper mapper = new ModelMapper();

        // Add mapping from String to LocalDate
        mapper.addConverter(new AbstractConverter<String, LocalDate>() {
            @Override
            protected LocalDate convert(String source) {
                return LocalDate.parse(source, DateTimeFormatter.ofPattern("dd-MM-yyyy"));
            }
        });
        return mapper;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> this.userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
