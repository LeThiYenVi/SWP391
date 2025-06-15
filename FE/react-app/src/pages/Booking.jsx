import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./Booking.css";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    service: "",
    doctor: "",
    date: "",
    time: "",
    type: "online", // online or inPerson
    notes: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const services = [
    {
      id: "sti-testing",
      name: "STI Testing & Screening",
      duration: "45 minutes",
      price: "$150 - $350",
      description: "Comprehensive sexually transmitted infection testing and consultation"
    },
    {
      id: "consultation",
      name: "Online Consultation",
      duration: "30-60 minutes",
      price: "$75 - $150",
      description: "Virtual consultation with healthcare professionals"
    },
    {
      id: "cycle-tracking",
      name: "Reproductive Health Consultation",
      duration: "30 minutes",
      price: "$100",
      description: "Menstrual cycle tracking and reproductive health guidance"
    },
    {
      id: "qa-expert",
      name: "Expert Q&A Session",
      duration: "30 minutes",
      price: "$60",
      description: "Direct consultation with medical experts"
    },
    {
      id: "health-checkup",
      name: "Comprehensive Health Checkup",
      duration: "60 minutes",
      price: "$250",
      description: "Complete physical examination and health assessment"
    },
    {
      id: "cardiology",
      name: "Cardiology Consultation",
      duration: "45 minutes",
      price: "$200",
      description: "Heart health evaluation and cardiovascular consultation"
    },
    {
      id: "dermatology",
      name: "Dermatology Consultation",
      duration: "30 minutes",
      price: "$150",
      description: "Skin health examination and treatment consultation"
    },
    {
      id: "pediatrics",
      name: "Pediatric Consultation",
      duration: "45 minutes",
      price: "$120",
      description: "Child health consultation and wellness check"
    }
  ];
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      specialization: "Heart Surgery",
      image: "/api/placeholder/80/80",
      availability: {
        "monday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        "tuesday": ["09:00", "10:00", "11:00", "14:00", "15:00"],
        "wednesday": ["09:00", "10:00", "14:00", "15:00", "16:00"],
        "thursday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        "friday": ["09:00", "10:00", "11:00", "14:00", "15:00"]
      }
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      department: "Dermatology",
      specialization: "Skin Cancer Treatment",
      image: "/api/placeholder/80/80",
      availability: {
        "monday": ["10:00", "11:00", "14:00", "15:00", "16:00"],
        "tuesday": ["09:00", "10:00", "11:00", "15:00", "16:00"],
        "wednesday": ["09:00", "10:00", "11:00", "14:00", "15:00"],
        "thursday": ["10:00", "11:00", "14:00", "15:00", "16:00"],
        "friday": ["09:00", "10:00", "11:00", "14:00"]
      }
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      department: "Pediatrics",
      specialization: "Child Development",
      image: "/api/placeholder/80/80",
      availability: {
        "monday": ["08:00", "09:00", "10:00", "11:00", "14:00"],
        "tuesday": ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00"],
        "wednesday": ["08:00", "09:00", "10:00", "14:00", "15:00"],
        "thursday": ["08:00", "09:00", "10:00", "11:00", "14:00"],
        "friday": ["08:00", "09:00", "10:00", "11:00"],
        "saturday": ["09:00", "10:00", "11:00"]
      }
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      department: "Orthopedics",
      specialization: "Sports Medicine",
      image: "/api/placeholder/80/80",
      availability: {
        "tuesday": ["10:00", "11:00", "14:00", "15:00", "16:00"],
        "wednesday": ["10:00", "11:00", "14:00", "15:00", "16:00"],
        "thursday": ["10:00", "11:00", "14:00", "15:00", "16:00"],
        "friday": ["10:00", "11:00", "14:00", "15:00"],
        "saturday": ["09:00", "10:00", "11:00", "14:00"]
      }
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      department: "Neurology",
      specialization: "Brain Disorders",
      image: "/api/placeholder/80/80",
      availability: {
        "monday": ["09:00", "10:00", "11:00", "14:00"],
        "tuesday": ["09:00", "10:00", "11:00", "14:00"],
        "wednesday": ["09:00", "10:00", "11:00", "14:00"],
        "thursday": ["09:00", "10:00", "11:00", "14:00"],
        "friday": ["09:00", "10:00", "11:00", "14:00"]
      }
    }
  ];
  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  // Helper function to get available time slots for selected doctor and date
  const getAvailableTimeSlots = () => {
    if (!bookingData.doctor || !bookingData.date) return [];
    
    const selectedDoctor = doctors.find(doc => doc.id.toString() === bookingData.doctor);
    if (!selectedDoctor) return [];
    
    const selectedDate = new Date(bookingData.date);
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'lowercase' });
    
    return selectedDoctor.availability[dayName] || [];
  };

  // Helper function to get filtered doctors based on selected service
  const getFilteredDoctors = () => {
    if (!bookingData.service) return doctors;
    
    const serviceSpecialtyMap = {
      'cardiology': 'Cardiology',
      'dermatology': 'Dermatology', 
      'pediatrics': 'Pediatrics',
      'orthopedics': 'Orthopedics',
      'neurology': 'Neurology'
    };
    
    const specialty = serviceSpecialtyMap[bookingData.service];
    if (!specialty) return doctors;
    
    return doctors.filter(doctor => doctor.department === specialty);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user makes a selection
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!bookingData.service) newErrors.service = "Vui lòng chọn dịch vụ";
        if (!bookingData.type) newErrors.type = "Vui lòng chọn hình thức";
        break;
      case 2:
        if (!bookingData.doctor) newErrors.doctor = "Vui lòng chọn bác sĩ";
        break;
      case 3:
        if (!bookingData.date) newErrors.date = "Vui lòng chọn ngày";
        if (!bookingData.time) newErrors.time = "Vui lòng chọn giờ";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn để xác nhận.");
      // Reset form
      setBookingData({
        service: "",
        doctor: "",
        date: "",
        time: "",
        type: "online",
        notes: "",
      });
      setCurrentStep(1);
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const selectedService = services.find((s) => s.id === bookingData.service);
  const selectedDoctor = doctors.find((d) => d.id === bookingData.doctor);
  return (
    <Layout>
      <div className="booking-container">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-brand">
          <h2>🏥 Dịch Vụ Chăm Sóc Sức Khỏe Giới Tính</h2>
        </div>
        <div className="nav-menu">
          <Link to="/home" className="nav-link">
            Trang Chủ
          </Link>
          <Link to="/services" className="nav-link">
            Dịch Vụ
          </Link>
          <Link to="/booking" className="nav-link active">
            Đặt Lịch
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/profile" className="nav-link">
            Hồ Sơ
          </Link>
          <Link to="/login" className="nav-link logout">
            Đăng Xuất
          </Link>
        </div>
      </nav>

      {/* Booking Content */}
      <div className="booking-content">
        <div className="container">
          <div className="booking-header">
            <h1>Đặt Lịch Hẹn</h1>
            <p>Chọn dịch vụ và thời gian phù hợp với bạn</p>
          </div>

          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <span>Chọn Dịch Vụ</span>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <span>Chọn Bác Sĩ</span>
            </div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <span>Chọn Thời Gian</span>
            </div>
            <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
              <div className="step-number">4</div>
              <span>Xác Nhận</span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form">
            {currentStep === 1 && (
              <div className="step-content">
                <h3>Bước 1: Chọn Dịch Vụ</h3>

                <div className="form-group">
                  <label>Hình thức tư vấn:</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="type"
                        value="online"
                        checked={bookingData.type === "online"}
                        onChange={handleInputChange}
                      />
                      <span>🖥️ Trực tuyến</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="type"
                        value="inPerson"
                        checked={bookingData.type === "inPerson"}
                        onChange={handleInputChange}
                      />
                      <span>🏥 Tại phòng khám</span>
                    </label>
                  </div>
                  {errors.type && (
                    <span className="error-message">{errors.type}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Chọn dịch vụ:</label>
                  <div className="services-list">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`service-option ${
                          bookingData.service === service.id ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleInputChange({
                            target: { name: "service", value: service.id },
                          })
                        }
                      >
                        <h4>{service.name}</h4>
                        <div className="service-details">
                          <span>⏱️ {service.duration}</span>
                          <span>💰 {service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.service && (
                    <span className="error-message">{errors.service}</span>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="step-content">
                <h3>Bước 2: Chọn Bác Sĩ</h3>

                <div className="form-group">
                  <label>Chọn bác sĩ phù hợp:</label>
                  <div className="doctors-list">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        className={`doctor-option ${
                          bookingData.doctor === doctor.id ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleInputChange({
                            target: { name: "doctor", value: doctor.id },
                          })
                        }
                      >
                        <div className="doctor-avatar">👨‍⚕️</div>
                        <div className="doctor-info">
                          <h4>{doctor.name}</h4>
                          <p>Chuyên khoa: {doctor.specialty}</p>
                          <p>Kinh nghiệm: {doctor.experience}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.doctor && (
                    <span className="error-message">{errors.doctor}</span>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-content">
                <h3>Bước 3: Chọn Thời Gian</h3>

                <div className="datetime-selection">
                  <div className="form-group">
                    <label>Chọn ngày:</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      className={errors.date ? "error" : ""}
                    />
                    {errors.date && (
                      <span className="error-message">{errors.date}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Chọn giờ:</label>
                    <div className="time-slots">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`time-slot ${
                            bookingData.time === time ? "selected" : ""
                          }`}
                          onClick={() =>
                            handleInputChange({
                              target: { name: "time", value: time },
                            })
                          }
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.time && (
                      <span className="error-message">{errors.time}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Ghi chú (tùy chọn):</label>
                    <textarea
                      name="notes"
                      value={bookingData.notes}
                      onChange={handleInputChange}
                      placeholder="Mô tả triệu chứng hoặc yêu cầu đặc biệt..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="step-content">
                <h3>Bước 4: Xác Nhận Thông Tin</h3>

                <div className="booking-summary">
                  <div className="summary-item">
                    <span className="label">Dịch vụ:</span>
                    <span className="value">{selectedService?.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Hình thức:</span>
                    <span className="value">
                      {bookingData.type === "online"
                        ? "Trực tuyến"
                        : "Tại phòng khám"}
                    </span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Bác sĩ:</span>
                    <span className="value">{selectedDoctor?.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Ngày:</span>
                    <span className="value">
                      {new Date(bookingData.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Giờ:</span>
                    <span className="value">{bookingData.time}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Thời gian:</span>
                    <span className="value">{selectedService?.duration}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Chi phí:</span>
                    <span className="value">{selectedService?.price}</span>
                  </div>
                  {bookingData.notes && (
                    <div className="summary-item">
                      <span className="label">Ghi chú:</span>
                      <span className="value">{bookingData.notes}</span>
                    </div>
                  )}
                </div>

                <div className="booking-note">
                  <p>
                    <strong>Lưu ý:</strong>
                  </p>
                  <ul>
                    <li>
                      Vui lòng có mặt đúng giờ hoặc tham gia cuộc gọi đúng thời
                      gian
                    </li>
                    <li>
                      Nếu cần hủy/thay đổi lịch hẹn, vui lòng liên hệ trước 24
                      giờ
                    </li>
                    <li>
                      Đối với tư vấn trực tuyến, link cuộc họp sẽ được gửi qua
                      email
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary"
                >
                  ← Quay Lại
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary"
                >
                  Tiếp Theo →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xử lý..." : "Xác Nhận Đặt Lịch"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Liên Hệ</h4>
              <p>📞 Hotline: 1900-xxxx</p>
              <p>📧 Email: info@healthcareservice.vn</p>
              <p>📍 Địa chỉ: TP. Hồ Chí Minh</p>
            </div>
            <div className="footer-section">
              <h4>Dịch Vụ</h4>
              <p>Xét nghiệm STIs</p>
              <p>Tư vấn trực tuyến</p>
              <p>Theo dõi chu kỳ</p>
            </div>
            <div className="footer-section">
              <h4>Hỗ Trợ</h4>
              <p>Câu hỏi thường gặp</p>
              <p>Chính sách bảo mật</p>
              <p>Điều khoản sử dụng</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 Dịch Vụ Chăm Sóc Sức Khỏe Giới Tính. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>      </div>
    </Layout>
  );
};

export default Booking;
