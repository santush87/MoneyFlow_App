package com.martin.aleksandrov.backend.config;

import org.modelmapper.Converter;
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
        mapper.addConverter((Converter<String, LocalDate>) context -> LocalDate.parse(context.getSource(),
                DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        return mapper;
    }
}
