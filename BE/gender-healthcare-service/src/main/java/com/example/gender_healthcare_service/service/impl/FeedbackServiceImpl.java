package com.example.gender_healthcare_service.service.impl;

import com.example.gender_healthcare_service.entity.Feedback;
import com.example.gender_healthcare_service.repository.FeedBackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedBackRepo feedBackRepo;

    @Override
    public List<Feedback> getAllFeedback() {
        return feedBackRepo.findByIsDeletedFalse();
    }

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedBackRepo.save(feedback);
    }

    @Override
    public Feedback getFeedbackById(Integer id) {
        return feedBackRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Feedback not found with id: " + id));
    }

    @Override
    public Feedback updateFeedback(Integer id, Feedback newFeedback) {
        Feedback existing = getFeedbackById(id);
        existing.setRating(newFeedback.getRating());
        existing.setComment(newFeedback.getComment());
        existing.setConsultantID(newFeedback.getConsultantID());
        return feedBackRepo.save(existing);
    }

    @Override
    public void deleteFeedback(Integer id) {
        Feedback feedback = getFeedbackById(id);
        feedback.setIsDeleted(true);
        feedBackRepo.save(feedback);
    }
}
