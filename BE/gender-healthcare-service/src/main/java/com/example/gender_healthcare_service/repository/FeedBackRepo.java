package com.example.gender_healthcare_service.repository;

import com.example.gender_healthcare_service.entity.Feedback;
import com.example.gender_healthcare_service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedBackRepo extends JpaRepository<Feedback, Integer> {
    List<Feedback> findByIsDeletedFalse();

    List<Feedback> findByCustomerIDAndIsDeletedFalse(User customerID);

    List<Feedback> findByConsultantIDAndIsDeletedFalse(User consultantID);

}
