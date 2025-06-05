package com.example.gender_healthcare_service.repository;

import com.example.gender_healthcare_service.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedBackRepo extends JpaRepository<Feedback, Integer> {
    public Feedback findFeedbackById(Integer id);

}
