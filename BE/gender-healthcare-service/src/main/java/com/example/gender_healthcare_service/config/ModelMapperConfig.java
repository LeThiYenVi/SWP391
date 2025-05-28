package com.example.gender_healthcare_service.config;

import com.example.gender_healthcare_service.dto.ConsultantDTO;
import com.example.gender_healthcare_service.dto.UserDTO;
import com.example.gender_healthcare_service.entity.Consultant;
import com.example.gender_healthcare_service.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.modelmapper.convention.MatchingStrategies;
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
        TypeMap<User, UserDTO> typeMap = modelMapper.createTypeMap(User.class, UserDTO.class);
        typeMap.addMappings(mapper -> {
            try {
                mapper.map(User::getId, UserDTO::setId);
                mapper.map(User::getUsername, UserDTO::setUsername);
                mapper.map(User::getEmail, UserDTO::setEmail);
                mapper.map(User::getFullName, UserDTO::setFullName);
                mapper.map(User::getRoleName, UserDTO::setRoleName);
                mapper.map(User::getPhoneNumber, UserDTO::setPhoneNumber);
                mapper.map(User::getAddress, UserDTO::setAddress);
                mapper.map(User::getDateOfBirth, UserDTO::setDateOfBirth);
                mapper.map(User::getMedicalHistory, UserDTO::setMedicalHistory);
                mapper.map(User::getGender, UserDTO::setGender);
                mapper.map(User::getDescription, UserDTO::setDescription);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }
}
//    private void configureConsultantMapping(ModelMapper modelMapper) {
//        modelMapper.typeMap(Consultant.class, Consultant
