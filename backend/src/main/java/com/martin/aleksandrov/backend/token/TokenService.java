package com.martin.aleksandrov.backend.token;

import com.martin.aleksandrov.backend.models.entities.UserEntity;
import com.martin.aleksandrov.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TokenService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    public UserEntity getUserFromToken(String receivedToken) throws BadRequestException {
        if (!receivedToken.startsWith("Bearer ")) {
            throw new IllegalArgumentException("Invalid token");
        }
        String jwt = receivedToken.substring(7);
        Token token = this.tokenRepository.findByToken(jwt)
                .orElseThrow(() -> new BadRequestException("Token not found"));

        return this.userRepository.findById(token.getUser().getId())
                .orElseThrow(() -> new BadRequestException("User not found"));
    }
}
