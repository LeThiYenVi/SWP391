package com.example.gender_healthcare_service.service.impl;

import com.example.gender_healthcare_service.entity.Feedback;

import java.util.List;

public interface FeedbackService {
    List<Feedback> getAllFeedback();
    Feedback createFeedback(Feedback feedback);
    Feedback getFeedbackById(Integer id);
    Feedback updateFeedback(Integer id, Feedback feedback);
    void deleteFeedback(Integer id);
}
