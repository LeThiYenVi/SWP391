package com.example.gender_healthcare_service.dto;

import lombok.Data;

@Data
public class ConsultantDTO {
    private String Id;
    private String biography;
    private String qualifications;
    private Integer experienceYears;
    private String specialization;

}
