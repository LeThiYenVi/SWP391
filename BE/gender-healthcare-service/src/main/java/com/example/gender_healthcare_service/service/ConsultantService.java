package com.example.gender_healthcare_service.service;

import com.example.gender_healthcare_service.dto.response.ConsultantDTO;

import java.util.List;

public interface ConsultantService {

     ConsultantDTO getConsultantById(String id);
     List<ConsultantDTO> getAllConsultants();
     void addConsultant(ConsultantDTO consultantDTO);
     void updateConsultant(String id, ConsultantDTO consultantDTO);
     void deleteConsultant(String id);

}
