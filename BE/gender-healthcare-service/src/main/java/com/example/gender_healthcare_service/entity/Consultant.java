package com.example.gender_healthcare_service.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Consultants")
public class Consultant {
    @Id
    @Column(name = "ConsultantID", nullable = false)
    private Integer consultantId;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ConsultantID", nullable = false)
    private User user;

    @Nationalized
    @Column(name = "Biography", length = 1000)
    private String biography;

    @Nationalized
    @Column(name = "Qualifications", length = 500)
    private String qualifications;

    @Column(name = "ExperienceYears")
    private Integer experienceYears;


    @Nationalized
    @Column(name = "Specialization", length = 100)
    private String specialization;

    @ColumnDefault("0")
    @Column(name = "IsDeleted")
    private Boolean isDeleted;

    @OneToMany(mappedBy = "consultant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ConsultantSchedule> consultantSchedules;

}