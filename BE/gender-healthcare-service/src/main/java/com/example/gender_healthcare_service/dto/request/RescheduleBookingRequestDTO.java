package com.example.gender_healthcare_service.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RescheduleBookingRequestDTO {
    private LocalDate newBookingDate;
    private Integer newTimeSlotId;
    private String adminNotes;
}

