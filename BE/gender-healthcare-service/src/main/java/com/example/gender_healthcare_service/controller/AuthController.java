package com.example.gender_healthcare_service.controller;

import com.example.gender_healthcare_service.dto.request.LoginRequest;
import com.example.gender_healthcare_service.dto.request.RegisterRequest;
import com.example.gender_healthcare_service.dto.response.AuthResponseDTO;
import com.example.gender_healthcare_service.service.impl.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController

public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequest loginRequest) {
        ResponseEntity<?> serviceResponse = authenticationService.loginUser(loginRequest);
        if (serviceResponse.getStatusCode().is2xxSuccessful()) {
            AuthResponseDTO authResponse = (AuthResponseDTO) serviceResponse.getBody();
            return ResponseEntity.ok(authResponse);
        } else {
            return ResponseEntity.status(serviceResponse.getStatusCode()).body(null);
        }
        }

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody RegisterRequest register) {
        ResponseEntity<?> serviceResponse = authenticationService.registerUser(register);
        if (serviceResponse.getStatusCode().is2xxSuccessful()) {
            AuthResponseDTO authResponseDTO = (AuthResponseDTO) serviceResponse.getBody();
            return ResponseEntity.ok(authResponseDTO);
        } else {
            return ResponseEntity.status(serviceResponse.getStatusCode()).body(null);
        }
    }


}
