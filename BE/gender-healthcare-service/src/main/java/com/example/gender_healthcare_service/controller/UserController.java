package com.example.gender_healthcare_service.controller;

import com.example.gender_healthcare_service.dto.UserDTO;
import com.example.gender_healthcare_service.entity.User;
import com.example.gender_healthcare_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{userName}")
    public User getUserByUserName(@PathVariable String userName) {
        return userService.findByUserName(userName);
    }
    @GetMapping("/user/list")
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }
    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }
}
