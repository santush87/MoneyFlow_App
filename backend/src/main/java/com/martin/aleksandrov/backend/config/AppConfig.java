package com.martin.aleksandrov.backend.config;

import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Configuration
public class AppConfig {

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
}
