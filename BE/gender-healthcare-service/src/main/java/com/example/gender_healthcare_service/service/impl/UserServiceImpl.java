package com.example.gender_healthcare_service.service.impl;

import com.example.gender_healthcare_service.dto.request.UserProfileRequest;
import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.repository.UserRepository;
import com.example.gender_healthcare_service.entity.User;
import com.example.gender_healthcare_service.service.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public User findByUserName(String userName) {
        return userRepository.findUserByUsername(userName);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserResponseDTO getInfo() {
        try {
            User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            User userValid = userRepository.findUserByUsername(currentUser.getUsername());
            if (userValid == null) {
               throw new RuntimeException("User not found");
            }
            return modelMapper.map(userValid, UserResponseDTO.class);
        } catch (Exception e) {
            System.out.println("Error fetching user info: " + e.getMessage());
        }
        return null;
    }

    @Override
    public UserResponseDTO updateUser(long userID, UserProfileRequest userProfile) {
        User user = userRepository.findUserById(userID);
        if (user != null && userProfile != null) {
            user.setFullName(userProfile.getFullName());
            user.setEmail(userProfile.getEmail());
            user.setPhoneNumber(userProfile.getPhoneNumber());
            user.setGender(userProfile.getGender());
            try {
                LocalDate birthDate = LocalDate.parse(userProfile.getDateOfBirth().toString());
                user.setDateOfBirth(birthDate);
            } catch (Exception e) {
                // Handle the case where the date format is incorrect
                System.out.println("Invalid date format: " + e.getMessage());
            }
            user.setUpdatedAt(new Date().toInstant());
            userRepository.save(user);
            return modelMapper.map(user, UserResponseDTO.class);
        }
        return null;
    }


}


