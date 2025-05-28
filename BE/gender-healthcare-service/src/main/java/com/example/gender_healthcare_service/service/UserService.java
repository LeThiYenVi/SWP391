package com.example.gender_healthcare_service.service;

import com.example.gender_healthcare_service.dto.UserDTO;
import com.example.gender_healthcare_service.entity.User;

import java.util.List;

public interface UserService {
    User findByUserName(String userName);
    List<User> getAllUsers();
    UserDTO registerUser(User User);
    UserDTO loginUser(String userName,String password);
    UserDTO updateUser(String userName, UserDTO userDTO);
    UserDTO getUserById(String userId);
}
