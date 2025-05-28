package com.example.gender_healthcare_service.service;

import com.example.gender_healthcare_service.dto.ConsultantDTO;
import com.example.gender_healthcare_service.entity.Consultant;
import com.example.gender_healthcare_service.repository.ConsultantRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultantServiceImpl implements ConsultantService {

    @Autowired
    private ConsultantRepository consultantRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ConsultantDTO getConsultantById(String id) {
        return null;
    }

    @Override
    public List<ConsultantDTO> getAllConsultants() {
        return List.of();
    }

    @Override
    public void addConsultant(ConsultantDTO consultantDTO) {

    }
    public ConsultantDTO addConsultant(Consultant consultant) {
    return null;
    }

    @Override
    public void updateConsultant(String id, ConsultantDTO consultantDTO) {

    }

    @Override
    public void deleteConsultant(String id) {

    }

}
