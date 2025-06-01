package com.example.gender_healthcare_service.service.impl;

import com.example.gender_healthcare_service.dto.request.LoginRequest;
import com.example.gender_healthcare_service.dto.request.RegisterRequest;
import com.example.gender_healthcare_service.dto.response.AuthResponseDTO;
import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.entity.Role;
import com.example.gender_healthcare_service.entity.User;
import com.example.gender_healthcare_service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {
    @Autowired
    private  UserRepository userRepository;
    @Autowired
    private  ModelMapper modelMapper;
    @Autowired
    private  PasswordEncoder passwordEncoder;
    @Autowired
    private  AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    public ResponseEntity<?> registerUser(RegisterRequest RegisterUser) {
        if(RegisterUser != null && RegisterUser.getUsername() != null) {
            if (userRepository.findUserByUsername(RegisterUser.getUsername()) != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("User already exists with username: " + RegisterUser.getUsername());
            }
            if(userRepository.findUserByEmail(RegisterUser.getEmail())!= null) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("Email already exists: " + RegisterUser.getEmail());
            }
            User newUser = modelMapper.map(RegisterUser, User.class);
            newUser.setPasswordHash(passwordEncoder.encode(RegisterUser.getPassword()));
            newUser.setRoleName(Role.ROLE_CUSTOMER.name());
            newUser.setIsDeleted(false);
            newUser.setFullName(RegisterUser.getUsername());

            userRepository.save(newUser);
            UserResponseDTO response = modelMapper.map(newUser, UserResponseDTO.class);

            Authentication authentication = authenticationManager.authenticate(
                    new org.springframework.security.authentication.UsernamePasswordAuthenticationToken(
                            RegisterUser.getUsername(),
                            RegisterUser.getPassword()
                    )
            );
            String jwt = jwtService.generateToken(authentication);
            return ResponseEntity.ok(new AuthResponseDTO(jwt));
        }
        return ResponseEntity.badRequest().body("Invalid registration request");
    }


    public ResponseEntity<?> loginUser(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );

            User user = userRepository.findUserByUsername(loginRequest.getUsername());
            if(user.getIsDeleted()) {
                throw new RuntimeException("User account is deleted");
            }
            UserResponseDTO userDTO= modelMapper.map(user, UserResponseDTO.class);
            String jwt = jwtService.generateToken(authentication);
            return ResponseEntity.ok(new AuthResponseDTO( jwt));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }


    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPasswordHash())
                .disabled(!user.isEnabled())
                .authorities(user.getRoleName())
                .build();
    }
}
