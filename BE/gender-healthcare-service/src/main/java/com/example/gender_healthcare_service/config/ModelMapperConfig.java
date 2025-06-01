package com.example.gender_healthcare_service.config;

import com.example.gender_healthcare_service.dto.response.UserResponseDTO;
import com.example.gender_healthcare_service.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        configureUserMapping(modelMapper);
        //configureConsultantMapping(modelMapper);
        return modelMapper;
    }

    private void configureUserMapping(ModelMapper modelMapper) {
        TypeMap<User, UserResponseDTO> typeMap = modelMapper.createTypeMap(User.class, UserResponseDTO.class);
        typeMap.addMappings(mapper -> {
            try {
                mapper.map(User::getId, UserResponseDTO::setId);
                mapper.map(User::getUsername, UserResponseDTO::setUsername);
                mapper.map(User::getEmail, UserResponseDTO::setEmail);
                mapper.map(User::getFullName, UserResponseDTO::setFullName);
                mapper.map(User::getRoleName, UserResponseDTO::setRoleName);
                mapper.map(User::getPhoneNumber, UserResponseDTO::setPhoneNumber);
                mapper.map(User::getAddress, UserResponseDTO::setAddress);
                mapper.map(User::getDateOfBirth, UserResponseDTO::setDateOfBirth);
                mapper.map(User::getMedicalHistory, UserResponseDTO::setMedicalHistory);
                mapper.map(User::getGender, UserResponseDTO::setGender);
                mapper.map(User::getDescription, UserResponseDTO::setDescription);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }
}
//    private void configureConsultantMapping(ModelMapper modelMapper) {
//        modelMapper.typeMap(Consultant.class, Consultant
