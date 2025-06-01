package com.example.gender_healthcare_service.service;

import com.example.gender_healthcare_service.dto.request.UserProfileRequest;
import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.entity.User;

import java.util.List;

public interface UserService {
    User findByUserName(String userName);
    List<User> getAllUsers();
    UserResponseDTO getInfo();
    UserResponseDTO updateUser(long userID, UserProfileRequest user);
}
