package com.example.gender_healthcare_service.repository;

import com.example.gender_healthcare_service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByEmail(String email);
    User findUserByUsername(String username);
    User findUserById(long id);
    // Custom query methods can be defined here if needed
    // For example, to find a user by their username:
    // Optional<User> findByUserName(String userName);

    // Or to find a user by their email:
    // Optional<User> findByEmail(String email);

    // You can also define methods for soft deletion or other custom queries as needed.
}
