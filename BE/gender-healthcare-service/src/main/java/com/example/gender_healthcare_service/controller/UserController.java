package com.example.gender_healthcare_service.controller;

import com.example.gender_healthcare_service.dto.request.UserProfileRequest;
import com.example.gender_healthcare_service.dto.response.BookingResponseDTO;
import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.service.BookingService;
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

    @PostMapping("/menstrual-cycle/log")
    public ResponseEntity<?> logMenstrualPeriod(/*@RequestBody MenstrualCycleLogDTO logDTO*/) {
        // TODO: Implement log menstrual period logic
        return null;
    }

    @GetMapping("/menstrual-cycle/tracker")
    public ResponseEntity<?> getMenstrualCycleTracker() {
        // TODO: Implement get menstrual cycle tracking info logic
        return null;
    }

    @GetMapping("/reminders")
    public ResponseEntity<?> getUserReminders() {
        return null;
    }
}
