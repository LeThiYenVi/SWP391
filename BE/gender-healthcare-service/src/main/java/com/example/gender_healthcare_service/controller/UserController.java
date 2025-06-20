package com.example.gender_healthcare_service.controller;

import com.example.gender_healthcare_service.dto.request.MenstrualCycleRequestDTO;
import com.example.gender_healthcare_service.dto.request.MenstrualLogRequestDTO;
import com.example.gender_healthcare_service.dto.request.UserProfileRequest;
import com.example.gender_healthcare_service.dto.response.BookingResponseDTO;
import com.example.gender_healthcare_service.dto.response.MenstrualCycleResponseDTO;
import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.service.BookingService;
import com.example.gender_healthcare_service.service.MenstrualCycleService;
import com.example.gender_healthcare_service.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@PreAuthorize("hasAuthority('ROLE_CUSTOMER')")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private BookingService bookingService;

    @Autowired
    private MenstrualCycleService menstrualCycleService;

    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody UserProfileRequest userProfileUpdate) {
        UserResponseDTO updatedUser = userService.updateUser(userProfileUpdate);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(400).body("Failed to update user profile");
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserInfo() {
        UserResponseDTO userInfo = userService.getInfo();
        if (userInfo != null) {
            return ResponseEntity.ok(userInfo);
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    @GetMapping("/booking-history")
    public ResponseEntity<?> getBookingHistory() {
        List<BookingResponseDTO> bookingHistory = bookingService.getUserBookings();
        return ResponseEntity.ok(bookingHistory);
    }

    @PostMapping("/menstrual-cycle")
    public ResponseEntity<MenstrualCycleResponseDTO> addOrUpdateMenstrualCycle(@RequestBody MenstrualCycleRequestDTO requestDTO) {
        return ResponseEntity.ok(menstrualCycleService.addOrUpdateMenstrualCycle(requestDTO));
    }

    @PostMapping("/menstrual-cycle/log")
    public ResponseEntity<?> logMenstrualPeriod(@RequestBody MenstrualLogRequestDTO logDTO) {
        try {
            menstrualCycleService.logMenstrualPeriod(logDTO);
            return ResponseEntity.ok("Menstrual period logged successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("Failed to log menstrual period: " + e.getMessage());
        }
    }

    @GetMapping("/menstrual-cycle/tracker")
    public ResponseEntity<?> getMenstrualCycleTracker() {
        try {
            return ResponseEntity.ok(menstrualCycleService.getMenstrualCycleTracker());
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping("/reminders")
    public ResponseEntity<?> getUserReminders() {
        return null;
    }
}
