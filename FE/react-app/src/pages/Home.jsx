import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-brand">
          <h2>🏥 VietHealth Medical Center</h2>
          <span className="certification">Giấy phép Bộ Y Tế số: 123456/BYT-KBCB | ISO 9001:2015 Certificate</span>
        </div>
        <div className="nav-menu">
          <Link to="/home" className="nav-link">Trang Chủ</Link>
          <Link to="/services" className="nav-link">Dịch Vụ</Link>
          <Link to="/booking" className="nav-link">Đặt Lịch</Link>
          <Link to="/blog" className="nav-link">Tin Tức Y Khoa</Link>
          <Link to="/profile" className="nav-link">Hồ Sơ</Link>
          <Link to="/login" className="nav-link logout">Đăng Xuất</Link>
        </div>
      </nav>

      {/* Certification Banner */}
      <div className="certification-banner">
        <div className="container">
          <div className="certifications">
            <div className="cert-item">
              <span className="cert-icon">🏆</span>
              <span>ISO 9001:2015 Quality Management</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">⚕️</span>
              <span>Bộ Y Tế Certificate No. 123456</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🔒</span>
              <span>HIPAA Compliant Security</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🌟</span>
              <span>JCI Accreditation Candidate</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🏥</span>
              <span>FDA Class II Equipment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>VietHealth Medical Center - Tiên Phong Trong Chăm Sóc Sức Khỏe Sinh Sản</h1>
          <p>Trung tâm y tế đạt chuẩn quốc tế với 15+ năm kinh nghiệm, đội ngũ 80+ chuyên gia đầu ngành và công nghệ y tế tiên tiến nhất</p>          <div className="trust-indicators">
            <div className="trust-item">
              <strong>150,000+</strong>
              <span>Bệnh nhân tin tưởng</span>
            </div>
            <div className="trust-item">
              <strong>99.95%</strong>
              <span>Độ chính xác xét nghiệm</span>
            </div>
            <div className="trust-item">
              <strong>24/7</strong>
              <span>Hỗ trợ y tế khẩn cấp</span>
            </div>
            <div className="trust-item">
              <strong>15+</strong>
              <span>Năm kinh nghiệm</span>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">Tìm Hiểu Dịch Vụ</Link>
            <Link to="/booking" className="btn-secondary">Đặt Lịch Ngay</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="healthcare-icon">🏥</div>
        </div>
      </div>      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Về VietHealth Medical Center</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>VietHealth Medical Center</strong> là trung tâm y tế chuyên khoa hàng đầu Việt Nam 
                trong lĩnh vực chăm sóc sức khỏe sinh sản và giới tính. Được thành lập năm 2008 với tầm nhìn 
                trở thành trung tâm y tế đạt chuẩn quốc tế, chúng tôi đã không ngừng đầu tư vào công nghệ 
                y tế tiên tiến và đào tạo đội ngũ chuyên gia đẳng cấp thế giới.
              </p>
              <p>
                Với hơn <strong>150,000</strong> bệnh nhân đã được phục vụ, VietHealth tự hào là một trong những 
                trung tâm y tế đầu tiên tại Việt Nam đạt chứng nhận <strong>ISO 15189:2012</strong> cho phòng xét nghiệm 
                và đang trong quá trình chứng nhận <strong>JCI Accreditation</strong> - tiêu chuẩn y tế cao nhất thế giới.
              </p>
              <div className="key-achievements">
                <h3>🏆 Thành Tựu Nổi Bật</h3>
                <ul>
                  <li>✅ Trung tâm y tế đầu tiên tại Việt Nam đạt độ chính xác xét nghiệm 99.95%</li>
                  <li>✅ Đội ngũ 80+ chuyên gia có chứng chỉ quốc tế từ Johns Hopkins, Harvard Medical</li>
                  <li>✅ Hệ thống AI tracking chu kỳ được phát triển độc quyền với 95% độ chính xác</li>
                  <li>✅ Đối tác chiến lược với các bệnh viện top đầu: Từ Dũ, Bạch Mai, Chợ Rẫy</li>
                  <li>✅ Được WHO công nhận là mô hình chăm sóc sức khỏe sinh sản tiêu biểu khu vực</li>
                </ul>
              </div>
            </div><div className="leadership-team">
              <h3>Đội Ngũ Lãnh Đạo Y Khoa</h3>
              <div className="leaders">
                <div className="leader">
                  <div className="leader-avatar">👨‍⚕️</div>
                  <h4>PGS.TS.BS Nguyễn Văn Minh</h4>
                  <p>Giám đốc Y khoa & Trưởng Ban Điều hành</p>
                  <p>• 25+ năm kinh nghiệm lâm sàng</p>
                  <p>• Cựu Phó Giám đốc BV Từ Dũ</p>
                  <p>• Chứng chỉ quốc tế Johns Hopkins</p>
                </div>
                <div className="leader">
                  <div className="leader-avatar">👩‍⚕️</div>
                  <h4>TS.BS Lê Thị Hoa</h4>
                  <p>Trưởng khoa Phụ Khoa & Sức khỏe Sinh sản</p>
                  <p>• 20+ năm chuyên khoa Phụ sản</p>
                  <p>• Học giả Fulbright tại Harvard Medical</p>
                  <p>• Chuyên gia hàng đầu về IVF</p>
                </div>
                <div className="leader">
                  <div className="leader-avatar">👨‍⚕️</div>
                  <h4>ThS.BS Trần Minh Khôi</h4>
                  <p>Trưởng khoa Nam khoa & Andrologia</p>
                  <p>• 18+ năm kinh nghiệm Nam khoa</p>
                  <p>• Chứng chỉ EAU European Urology</p>
                  <p>• Chuyên gia vi phẫu sinh dục nam</p>
                </div>
                <div className="leader">
                  <div className="leader-avatar">👩‍⚕️</div>
                  <h4>BS.CKI Phạm Thị Lan</h4>
                  <p>Giám đốc Chất lượng & An toàn Y tế</p>
                  <p>• 15+ năm quản lý chất lượng y tế</p>
                  <p>• Chứng chỉ ISO 9001:2015 Lead Auditor</p>
                  <p>• Chuyên gia JCI Accreditation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2>Dịch Vụ Chuyên Khoa</h2>
          <div className="services-grid">            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Xét Nghiệm STIs Chuẩn Quốc Tế</h3>
              <p>Xét nghiệm toàn diện các bệnh lây truyền qua đường tình dục với công nghệ PCR Real-time và ELISA thế hệ 4</p>
              <div className="service-features">
                <span className="feature">✓ Kết quả trong 6-24h</span>
                <span className="feature">✓ Độ chính xác 99.95%</span>
                <span className="feature">✓ ISO 15189:2012 Certified</span>
                <span className="feature">✓ FDA Class II Equipment</span>
              </div>
              <Link to="/services" className="service-link">Xem chi tiết</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Theo Dõi Chu Kỳ AI-Powered</h3>
              <p>Hệ thống AI tiên tiến phân tích chu kỳ sinh sản với thuật toán machine learning được đào tạo từ 1M+ dữ liệu</p>
              <div className="service-features">
                <span className="feature">✓ AI Algorithm v3.2</span>
                <span className="feature">✓ 95% độ chính xác dự đoán</span>
                <span className="feature">✓ GDPR Compliant</span>
                <span className="feature">✓ Real-time Analytics</span>
              </div>
              <Link to="/cycle-tracking" className="service-link">Trải nghiệm AI</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">👩‍⚕️</div>
              <h3>Telemedicine Chuyên Khoa</h3>
              <p>Nền tảng tư vấn từ xa đạt chuẩn quốc tế với bảo mật AES-256 và hỗ trợ đa ngôn ngữ</p>
              <div className="service-features">
                <span className="feature">✓ Board-certified Doctors</span>
                <span className="feature">✓ 24/7 Emergency Support</span>
                <span className="feature">✓ AES-256 Encryption</span>
                <span className="feature">✓ HL7 FHIR Compatible</span>
              </div>
              <Link to="/booking" className="service-link">Tư vấn ngay</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>Medical Q&A Platform</h3>
              <p>Cộng đồng y khoa với sự tham gia của 200+ chuyên gia được chứng nhận và hệ thống AI fact-checking</p>              <div className="service-features">
                <span className="feature">✓ 200+ Verified Experts</span>
                <span className="feature">✓ AI Fact-checking</span>
                <span className="feature">✓ Peer Review System</span>
                <span className="feature">✓ Evidence-based Medicine</span>
              </div>
              <Link to="/qa" className="service-link">Đặt câu hỏi</Link>
            </div>
              <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Medical Education Hub</h3>
              <p>Nội dung giáo dục y khoa được thẩm định bởi Hội Y học Việt Nam và WHO, cập nhật theo guidelines mới nhất</p>
              <div className="service-features">
                <span className="feature">✓ WHO Guidelines 2024</span>
                <span className="feature">✓ Peer-reviewed Content</span>
                <span className="feature">✓ Multi-language Support</span>
                <span className="feature">✓ Interactive Learning</span>
              </div>
              <Link to="/blog" className="service-link">Khám phá kiến thức</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⭐</div>
              <h3>Transparent Review System</h3>
              <p>Hệ thống đánh giá công khai được kiểm duyệt bởi bên thứ 3 độc lập, đảm bảo tính xác thực 100%</p>
              <div className="service-features">
                <span className="feature">✓ Third-party Verified</span>
                <span className="feature">✓ Blockchain Authentication</span>
                <span className="feature">✓ Real Patient Reviews</span>
                <span className="feature">✓ 24h Response Time</span>
              </div>
              <Link to="/reviews" className="service-link">Xem đánh giá thực</Link>
            </div>
          </div>
        </div>
      </section>      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <h2>Chứng Nhận & Giải Thưởng Quốc Tế</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <div className="credential-icon">🏆</div>
              <h4>JCI Accreditation Candidate</h4>
              <p>Đang trong quá trình chứng nhận tiêu chuẩn y tế quốc tế cao nhất</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">📜</div>
              <h4>ISO 9001:2015 & ISO 15189:2012</h4>
              <p>Chứng nhận chất lượng & phòng xét nghiệm y khoa quốc tế</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">⚕️</div>
              <h4>Bộ Y Tế License No. 123456</h4>
              <p>Giấy phép hoạt động khám bệnh, chữa bệnh chuyên khoa</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">🔒</div>
              <h4>HIPAA & GDPR Compliant</h4>
              <p>Tuân thủ chuẩn bảo mật dữ liệu y tế quốc tế</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">🌟</div>
              <h4>Vietnam Healthcare Excellence Award 2024</h4>
              <p>Giải thưởng xuất sắc ngành y tế Việt Nam</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">🎯</div>
              <h4>WHO Quality Standards</h4>
              <p>Đạt tiêu chuẩn chất lượng của Tổ chức Y tế Thế giới</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">💎</div>
              <h4>FDA Class II Equipment Certified</h4>
              <p>Trang thiết bị y tế được FDA Hoa Kỳ chứng nhận</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">🛡️</div>
              <h4>Cyber Security Excellence</h4>
              <p>Chứng nhận an ninh mạng cao cấp cho dữ liệu y tế</p>
            </div>
          </div>
        </div>
      </section>      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Con Số Ấn Tượng</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>150,000+</h3>
              <p>Bệnh nhân đã được phục vụ</p>
            </div>
            <div className="stat-item">
              <h3>80+</h3>
              <p>Bác sĩ & chuyên gia y tế</p>
            </div>
            <div className="stat-item">
              <h3>99.95%</h3>
              <p>Độ chính xác xét nghiệm</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Năm kinh nghiệm trong ngành</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Hỗ trợ y tế khẩn cấp</p>
            </div>
            <div className="stat-item">
              <h3>98.7%</h3>
              <p>Tỷ lệ hài lòng của bệnh nhân</p>
            </div>
          </div>
        </div>
      </section>      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Đánh Giá Chân Thực Từ Bệnh Nhân</h2>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"VietHealth Medical Center thực sự là trung tâm y tế đẳng cấp quốc tế. Quy trình xét nghiệm chuyên nghiệp, kết quả chính xác và thái độ phục vụ tận tâm. Đặc biệt ấn tượng với hệ thống bảo mật thông tin đạt chuẩn HIPAA."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Dr. Nguyễn Thị Minh Anh</h4>
                  <p>Bác sĩ Phụ khoa - BV Phụ sản Trung ương</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                  <span className="verified">✓ Đã xác thực</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"Là một doanh nhân bận rộn, tôi đánh giá cao dịch vụ telemedicine của VietHealth. Chất lượng tư vấn không khác gì khám trực tiếp, công nghệ hiện đại và đội ngũ bác sĩ chuyên môn cao."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>CEO Trần Minh Khoa</h4>
                  <p>Giám đốc điều hành - TechCorp Vietnam</p>                  <div className="rating">⭐⭐⭐⭐⭐</div>
                  <span className="verified">✓ Đã xác thực</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"Với 12 năm kinh nghiệm trong ngành y tế, tôi đánh giá VietHealth là một trong những trung tâm chăm sóc sức khỏe sinh sản tốt nhất Việt Nam. Quy trình chuyên nghiệp, trang thiết bị hiện đại đạt chuẩn quốc tế."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>ThS.BS Lê Thị Hương</h4>
                  <p>Trưởng khoa Xét nghiệm - BV Bạch Mai</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                  <span className="verified">✓ Chuyên gia y tế</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"Hệ thống AI tracking chu kỳ của VietHealth rất chính xác, giúp tôi hiểu rõ hơn về cơ thể mình. Đội ngũ hỗ trợ 24/7 luôn sẵn sàng giải đáp mọi thắc mắc. Truly impressed!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Ms. Jennifer Wong</h4>
                  <p>International Marketing Director</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                  <span className="verified">✓ Verified Patient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Bắt Đầu Hành Trình Chăm Sóc Sức Khỏe</h2>
          <p>Đăng ký ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia hàng đầu</p>
          <div className="cta-content">
            <div className="contact-options">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Hotline 24/7</h4>
                  <p>1900-8386 (miễn phí)</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email tư vấn</h4>
                  <p>tuvan@viethealthmc.vn</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <h4>Chat trực tuyến</h4>
                  <p>Phản hồi trong 5 phút</p>
                </div>
              </div>
            </div>
            <Link to="/booking" className="btn-primary">Đặt Lịch Tư Vấn Miễn Phí</Link>
          </div>
        </div>
      </section>      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>VietHealth Medical Center</h4>
              <p>📍 Địa chỉ: 123 Nguyễn Văn Cừ, Q.1, TP.HCM</p>
              <p>📞 Emergency Hotline: 1900-8386 (24/7)</p>
              <p>📞 Appointment: (028) 3999-8386</p>
              <p>📧 info@viethealthmc.vn</p>
              <p>🌐 www.viethealthmc.vn</p>
              <div className="social-links">
                <span>Theo dõi: </span>
                <a href="#">Facebook</a> | <a href="#">LinkedIn</a> | <a href="#">YouTube</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Dịch Vụ Y Tế Chuyên Sâu</h4>
              <p>• Xét nghiệm STIs (PCR Real-time)</p>
              <p>• Nam khoa & Andrologia</p>
              <p>• Phụ khoa & Sức khỏe sinh sản</p>
              <p>• Telemedicine & AI Consultation</p>
              <p>• Fertility Assessment & IVF Support</p>
              <p>• Preventive Healthcare Programs</p>
            </div>
            <div className="footer-section">
              <h4>Chứng Nhận & Giấy Phép</h4>
              <p>• Bộ Y Tế License: 123456/BYT-KBCB</p>
              <p>• ISO 9001:2015 Quality Management</p>
              <p>• ISO 15189:2012 Medical Laboratory</p>
              <p>• HIPAA & GDPR Compliance</p>
              <p>• JCI Accreditation Candidate</p>
              <p>• FDA Class II Equipment Certified</p>
              <p>• WHO Quality Standards</p>
            </div>
            <div className="footer-section">
              <h4>Hỗ Trợ & Chính Sách</h4>
              <p>• Patient Support 24/7</p>
              <p>• Medical Emergency Response</p>
              <p>• International Insurance Accepted</p>
              <p>• Data Privacy & Security Policy</p>
              <p>Điều khoản sử dụng</p>
              <p>Câu hỏi thường gặp</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 VietHealth Medical Center. Bản quyền thuộc về VietHealth Medical Center.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
