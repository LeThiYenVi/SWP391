package com.example.gender_healthcare_service.repository;

import com.example.gender_healthcare_service.entity.Payment;
import com.example.gender_healthcare_service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Integer> {
    List<Payment> findByIsDeletedFalse();
    List<Payment> findByCustomerAndIsDeletedFalse(User customer);
}
