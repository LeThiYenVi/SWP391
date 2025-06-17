import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { FaUserMd, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Doctors.css';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');

  // Mock doctors data - in real app, this would come from API
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      specialization: 'Heart Surgery',
      experience: '15 years',
      rating: 4.9,
      reviews: 245,
      image: '/api/placeholder/150/150',
      location: 'Main Building, Floor 3',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@medcenter.com',
      education: 'MD from Harvard Medical School',
      languages: ['English', 'Spanish'],
      availability: 'Mon-Fri 9AM-5PM',
      about: 'Dr. Johnson is a renowned cardiologist with over 15 years of experience in cardiovascular medicine and surgery.',
      achievements: [
        'Board Certified Cardiologist',
        'Fellow of American College of Cardiology',
        'Published 50+ research papers'
      ]
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      department: 'Dermatology',
      specialization: 'Skin Cancer Treatment',
      experience: '12 years',
      rating: 4.8,
      reviews: 189,
      image: '/api/placeholder/150/150',
      location: 'Medical Plaza, Floor 2',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@medcenter.com',
      education: 'MD from Johns Hopkins University',
      languages: ['English', 'Mandarin'],
      availability: 'Mon-Thu 8AM-4PM',
      about: 'Specialist in dermatology with focus on skin cancer prevention and treatment using latest medical technologies.',
      achievements: [
        'Board Certified Dermatologist',
        'Expert in Mohs Surgery',
        'Research in Melanoma Treatment'
      ]
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      department: 'Pediatrics',
      specialization: 'Child Development',
      experience: '10 years',
      rating: 4.9,
      reviews: 312,
      image: '/api/placeholder/150/150',
      location: 'Children\'s Wing, Floor 1',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@medcenter.com',
      education: 'MD from Stanford University',
      languages: ['English', 'Spanish', 'French'],
      availability: 'Mon-Sat 7AM-3PM',
      about: 'Dedicated pediatrician specializing in child development and adolescent health with a gentle, caring approach.',
      achievements: [
        'Board Certified Pediatrician',
        'Certified in Child Development',
        'Pediatric Emergency Medicine Training'
      ]
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      department: 'Orthopedics',
      specialization: 'Sports Medicine',
      experience: '18 years',
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/150/150',
      location: 'Sports Medicine Center, Floor 1',
      phone: '+1 (555) 456-7890',
      email: 'james.wilson@medcenter.com',
      education: 'MD from Mayo Clinic',
      languages: ['English'],
      availability: 'Tue-Sat 10AM-6PM',
      about: 'Orthopedic surgeon specializing in sports injuries and joint replacement with minimally invasive techniques.',
      achievements: [
        'Board Certified Orthopedic Surgeon',
        'Team Physician for Local Sports Teams',
        'Expert in Arthroscopic Surgery'
      ]
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      department: 'Neurology',
      specialization: 'Brain Disorders',
      experience: '14 years',
      rating: 4.8,
      reviews: 203,
      image: '/api/placeholder/150/150',
      location: 'Neuroscience Center, Floor 4',
      phone: '+1 (555) 567-8901',
      email: 'lisa.thompson@medcenter.com',
      education: 'MD from Yale University',
      languages: ['English', 'German'],
      availability: 'Mon-Fri 8AM-4PM',
      about: 'Neurologist with expertise in treating complex brain disorders and epilepsy management.',
      achievements: [
        'Board Certified Neurologist',
        'Epilepsy Specialist Certification',
        'Research in Alzheimer\'s Disease'
      ]
    },
    {
      id: 6,
      name: 'Dr. Robert Kumar',
      department: 'Internal Medicine',
      specialization: 'Preventive Care',
      experience: '20 years',
      rating: 4.6,
      reviews: 298,
      image: '/api/placeholder/150/150',
      location: 'Primary Care Center, Floor 2',
      phone: '+1 (555) 678-9012',
      email: 'robert.kumar@medcenter.com',
      education: 'MD from University of Pennsylvania',
      languages: ['English', 'Hindi', 'Urdu'],
      availability: 'Mon-Fri 7AM-5PM',
      about: 'Internal medicine physician focused on preventive care and managing chronic conditions.',
      achievements: [
        'Board Certified Internal Medicine',
        'Geriatric Medicine Specialist',
        'Quality Care Excellence Award'
      ]
    }
  ];

  const departments = [
    'all', 'Cardiology', 'Dermatology', 'Pediatrics', 
    'Orthopedics', 'Neurology', 'Internal Medicine'
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    const matchesRating = selectedRating === 'all' || doctor.rating >= parseFloat(selectedRating);
    
    return matchesSearch && matchesDepartment && matchesRating;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'} 
      />
    ));
  };

  return (
    <Layout>
      <div className="doctors-container">
        <div className="doctors-header">
          <h1>Our Medical Experts</h1>
          <p>Connect with experienced healthcare professionals dedicated to your well-being</p>
        </div>

        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search doctors by name, department, or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filters">
            <div className="filter-group">
              <label><FaFilter /> Department:</label>
              <select 
                value={selectedDepartment} 
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Minimum Rating:</label>
              <select 
                value={selectedRating} 
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.0">4.0+ Stars</option>
                <option value="3.5">3.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="results-summary">
          <p>Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}</p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="availability-badge">Available</div>
              </div>
              
              <div className="doctor-info">
                <div className="doctor-header">
                  <h3>{doctor.name}</h3>
                  <div className="rating">
                    <div className="stars">
                      {renderStars(doctor.rating)}
                    </div>
                    <span className="rating-text">{doctor.rating} ({doctor.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="doctor-details">
                  <p className="department">{doctor.department}</p>
                  <p className="specialization">{doctor.specialization}</p>
                  <p className="experience">{doctor.experience} experience</p>
                </div>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>{doctor.phone}</span>
                  </div>                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>{doctor.email}</span>
                  </div>
                </div>
                
                <div className="doctor-about">
                  <p>{doctor.about}</p>
                </div>
                
                <div className="doctor-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {doctor.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="languages">
                  <strong>Languages: </strong>
                  {doctor.languages.join(', ')}
                </div>
                
                <div className="availability-info">
                  <strong>Available: </strong>
                  {doctor.availability}
                </div>
                
                <div className="doctor-actions">
                  <Link to="/booking" className="book-appointment-btn">
                    <FaCalendarAlt /> Book Appointment
                  </Link>
                  <button className="view-profile-btn">
                    <FaUserMd /> View Full Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="no-results">
            <FaUserMd className="no-results-icon" />
            <h3>No doctors found</h3>
            <p>Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Doctors;
