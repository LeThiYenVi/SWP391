package com.example.gender_healthcare_service.controller;

import com.example.gender_healthcare_service.dto.response.ConsultantDTO;
import com.example.gender_healthcare_service.service.ConsultantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/consultant")
@RestController()
@PreAuthorize("hasAuthority('CUSTOMER') or hasAuthority('CONSULTANT')")
public class ConsultantController {
    @Autowired
    private ConsultantService consultantService;

    @GetMapping("/listConsultant")
    public List<ConsultantDTO> getConsultantInfo() {
        List<ConsultantDTO> consultantList = consultantService.getAllConsultants();
        return null;
    }
}
