package com.martin.aleksandrov.backend.exceptions;

public class ExistingCategoryException extends RuntimeException {
    public ExistingCategoryException(String message) {
        super(message);
    }
}
