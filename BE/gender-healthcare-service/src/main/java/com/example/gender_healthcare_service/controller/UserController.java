package com.example.gender_healthcare_service.controller;

import com.example.gender_healthcare_service.dto.request.UserProfileRequest;
import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.entity.User;
import com.example.gender_healthcare_service.service.UserService;
import com.example.gender_healthcare_service.service.impl.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/user/updateProfile")
    public ResponseEntity<?> updateProfile(@PathVariable long id ,@RequestBody UserProfileRequest UserProfileUpdate) {
      if(id!=0 && UserProfileUpdate != null) {
            UserResponseDTO updatedUser = userService.updateUser(id, UserProfileUpdate);
            if (updatedUser != null) {
                return ResponseEntity.ok(updatedUser);
            } else {
                return ResponseEntity.status(400).body("Failed to update user profile");
            }
        } else {
            return ResponseEntity.status(400).body("Invalid user ID or profile data");
        }
    }

    @GetMapping("/user/getProfile")
    public ResponseEntity<?> getUserInfo() {
        UserResponseDTO userInfo = userService.getInfo();
        if (userInfo != null) {
            return ResponseEntity.ok(userInfo);
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }


    @GetMapping("/user/list")
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }

}
