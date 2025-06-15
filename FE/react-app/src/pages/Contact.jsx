import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaClipboard,
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,  FaHospital,
  FaUserMd,
  FaCalendarAlt
} from 'react-icons/fa';
import { showSuccess, showError } from '../utils/notifications';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [    {
      icon: <FaPhone />,
      title: 'Điện Thoại',
      primary: '+84 (24) 123-4567',
      secondary: 'Cấp cứu: +84 (24) 911-1115',
      color: '#007bff'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      primary: 'info@viethealth.com.vn',
      secondary: 'capCuu@viethealth.com.vn',
      color: '#28a745'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Địa Chỉ',
      primary: '123 Đường Y Tế, Quận 1',
      secondary: 'TP. Hồ Chí Minh, Việt Nam',
      color: '#dc3545'
    },
    {
      icon: <FaClock />,
      title: 'Giờ Làm Việc',
      primary: 'Thứ 2-6: 7:00 - 21:00',
      secondary: 'Thứ 7-CN: 8:00 - 18:00',
      color: '#ffc107'
    }
  ];
  const departments = [
    { value: 'general', label: 'Tư vấn chung' },
    { value: 'appointments', label: 'Đặt lịch hẹn' },
    { value: 'billing', label: 'Thanh toán & Bảo hiểm' },
    { value: 'emergency', label: 'Dịch vụ cấp cứu' },
    { value: 'cardiology', label: 'Tim mạch' },
    { value: 'dermatology', label: 'Da liễu' },
    { value: 'pediatrics', label: 'Nhi khoa' },
    { value: 'orthopedics', label: 'Chấn thương chỉnh hình' },
    { value: 'neurology', label: 'Thần kinh' },
    { value: 'internal', label: 'Nội khoa' }
  ];
  const officeLocations = [
    {
      name: 'Trung Tâm Y Tế Chính',
      address: '123 Đường Y Tế, Quận 1, TP. Hồ Chí Minh',
      phone: '+84 (28) 123-4567',
      email: 'main@viethealth.com.vn',
      hours: 'Thứ 2-6: 7:00-21:00, Thứ 7-CN: 8:00-18:00',
      services: ['Khoa Cấp Cứu', 'Phẫu Thuật', 'ICU', 'Xét Nghiệm', 'Chẩn Đoán Hình Ảnh'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Chi Nhánh Bắc Sài Gòn',
      address: '456 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh',
      phone: '+84 (28) 234-5678',
      email: 'north@viethealth.com.vn',
      hours: 'Thứ 2-6: 8:00-19:00, Thứ 7: 9:00-17:00',
      services: ['Ngoại Trú', 'Tim Mạch', 'Chấn Thương Chỉnh Hình', 'Vật Lý Trị Liệu'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Trung Tâm Nhi Khoa',
      address: '789 Đường Trẻ Em, Quận 3, TP. Hồ Chí Minh',
      phone: '+84 (28) 345-6789',
      email: 'pediatrics@viethealth.com.vn',
      hours: 'Thứ 2-7: 7:00-20:00, CN: 9:00-17:00',
      services: ['Chăm Sóc Nhi Khoa', 'NICU', 'Tâm Lý Trẻ Em', 'Tiêm Chủng'],
      image: '/api/placeholder/300/200'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#', color: '#3b5998' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#e1306c' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: '#0077b5' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      showError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
        showSuccess('Your message has been sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: '',
        urgency: 'normal'
      });    } catch (error) {
      showError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="contact-container">        <div className="contact-header">
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Liên hệ với trung tâm y tế của chúng tôi để đặt lịch hẹn, tư vấn hoặc hỗ trợ cấp cứu</p>
        </div>

        {/* Quick Contact Info */}
        <div className="quick-contact-section">
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon" style={{ color: info.color }}>
                  {info.icon}
                </div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  <p className="primary-info">{info.primary}</p>
                  <p className="secondary-info">{info.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="contact-main-grid">
          {/* Contact Form */}          <div className="contact-form-section">
            <h2>Gửi Tin Nhắn Cho Chúng Tôi</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser className="label-icon" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="label-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone className="label-icon" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="department">
                    <FaHospital className="label-icon" />
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">                <div className="form-group">
                  <label htmlFor="subject">
                    <FaClipboard className="label-icon" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="urgency">
                    <FaCalendarAlt className="label-icon" />
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low Priority</option>
                    <option value="normal">Normal</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">
                  <FaEnvelope className="label-icon" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your inquiry or concern in detail..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="additional-info-section">
            <div className="info-card">
              <h3>Need Immediate Assistance?</h3>
              <p>For medical emergencies, call 911 or visit our emergency department immediately.</p>
              <div className="emergency-contacts">
                <div className="emergency-item">
                  <strong>Emergency Line:</strong>
                  <span>+1 (555) 911-HELP</span>
                </div>
                <div className="emergency-item">
                  <strong>24/7 Nurse Line:</strong>
                  <span>+1 (555) ASK-NURSE</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Response Time</h3>
              <ul>
                <li><strong>Urgent inquiries:</strong> Within 2 hours</li>
                <li><strong>General inquiries:</strong> Within 24 hours</li>
                <li><strong>Appointment requests:</strong> Within 4 hours</li>
                <li><strong>Billing questions:</strong> Within 48 hours</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Follow Us</h3>
              <p>Stay connected with our medical center for health tips, news, and updates.</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="social-link"
                    style={{ color: social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="locations-section">
          <h2>Our Locations</h2>
          <div className="locations-grid">
            {officeLocations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                </div>
                <div className="location-info">
                  <h3>{location.name}</h3>
                  <div className="location-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{location.address}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="detail-item">
                      <FaEnvelope className="detail-icon" />
                      <span>{location.email}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  <div className="location-services">
                    <h4>Services Available:</h4>
                    <div className="services-list">
                      {location.services.map((service, idx) => (
                        <span key={idx} className="service-tag">{service}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I schedule an appointment?</h4>
              <p>You can schedule an appointment online through our patient portal, call our appointment line, or visit us in person.</p>
            </div>
            <div className="faq-item">
              <h4>What insurance plans do you accept?</h4>
              <p>We accept most major insurance plans. Please contact our billing department to verify your specific coverage.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer telehealth services?</h4>
              <p>Yes, we offer virtual consultations for many non-emergency medical conditions. Ask about telehealth options when scheduling.</p>
            </div>
            <div className="faq-item">
              <h4>What should I bring to my appointment?</h4>
              <p>Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
