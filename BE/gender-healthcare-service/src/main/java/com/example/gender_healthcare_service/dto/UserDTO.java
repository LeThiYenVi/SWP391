package com.example.gender_healthcare_service.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Data
public class UserDTO {
    private Integer id;
    private String username;
    private String email;
    private String fullName;
    private String roleName;
    private String phoneNumber;
    private String address;
    private LocalDate dateOfBirth;
    private String medicalHistory;
    private String gender;
    private String description;
}
