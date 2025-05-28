package com.example.gender_healthcare_service.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull
    @Nationalized
    @Column(name = "Username", nullable = false, length = 50)
    private String username;

    @Size(max = 256)
    @NotNull
    @Nationalized
    @Column(name = "PasswordHash", nullable = false, length = 68)
    private String passwordHash;

    @Size(max = 100)
    @NotNull
    @Nationalized
    @Column(name = "Email", nullable = false, length = 100)
    private String email;

    @Size(max = 100)
    @Nationalized
    @Column(name = "FullName", nullable = false, length = 100)
    private String fullName;

    @Size(max = 20)
    @Nationalized
    @Column(name = "PhoneNumber", length = 20)
    private String phoneNumber;

    @Size(max = 255)
    @NotNull
    @Nationalized
    @Column(name = "RoleName", nullable = false)
    private String roleName;

    @Size(max = 200)
    @Nationalized
    @Column(name = "Description", length = 200)
    private String description;

    @Column(name = "DateOfBirth")
    private LocalDate dateOfBirth;

    @Size(max = 200)
    @Nationalized
    @Column(name = "Address", length = 200)
    private String address;

    @Size(max = 20)
    @Nationalized
    @Column(name = "Gender", length = 20)
    private String gender;

    @Size(max = 1000)
    @Nationalized
    @Column(name = "MedicalHistory", length = 1000)
    private String medicalHistory;

    @ColumnDefault("getdate()")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("getdate()")
    @Column(name = "UpdatedAt")
    private Instant updatedAt;

    @ColumnDefault("0")
    @Column(name = "IsDeleted")
    private Boolean isDeleted;

    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
    private Consultant consultant;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        if(this.roleName != null) {
            authorities.add(() -> this.roleName);
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return "";
    }
    @Override
    public String getUsername() {
        return this.username;
    }


}

