package com.example.gender_healthcare_service.dto.response;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String token;
    public AuthResponseDTO(String token) {
        this.token = token;
    }
}
