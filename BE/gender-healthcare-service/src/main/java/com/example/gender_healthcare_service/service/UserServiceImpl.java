package com.example.gender_healthcare_service.service;

import com.example.gender_healthcare_service.dto.UserDTO;
import com.example.gender_healthcare_service.repository.UserRepository;
import com.example.gender_healthcare_service.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private  UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public User findByUserName(String userName) {
        return userRepository.findUserByUsername(userName);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserDTO registerUser(User ResgisterUser) {
        if(ResgisterUser != null && ResgisterUser.getUsername() != null) {
            User existingUser = userRepository.findUserByUsername(ResgisterUser.getUsername());
            if (existingUser != null) {
                throw new RuntimeException("User already exists with username: " + ResgisterUser.getUsername());
            }
            ResgisterUser.setPasswordHash(passwordEncoder.encode(ResgisterUser.getPassword()));
            ResgisterUser.setRoleName("ROLE_CUSTOMER"); // Default role, can be changed later

            userRepository.save(ResgisterUser);

            UserDTO respone = modelMapper.map(ResgisterUser, UserDTO.class);
            return respone;
        }
        return null;
    }

    @Override
    public UserDTO loginUser(String userName, String password) {
        User user = userRepository.findUserByUsername(userName);
        if(user!=null && passwordEncoder.matches(password, user.getPasswordHash())) {
            return modelMapper.map(user, UserDTO.class);
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }

    @Override
    public UserDTO updateUser(String userName, UserDTO userDTO) {
        return null;
    }

    @Override
    public UserDTO getUserById(String userId) {
        return null;
    }
}
