import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
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
            <h1>VietHealth Medical Center - Tiên Phong Trong Chăm Sóc Sức Khỏe</h1>
            <p>
              Trung tâm y tế đạt chuẩn quốc tế với 15+ năm kinh nghiệm, đội ngũ
              80+ chuyên gia đầu ngành và công nghệ y tế tiên tiến nhất
            </p>
            <div className="trust-indicators">
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
              <Link to="/services" className="btn-primary">
                Tìm Hiểu Dịch Vụ
              </Link>
              <Link to="/booking" className="btn-secondary">
                Đặt Lịch Ngay
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="healthcare-icon">🏥</div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="services-section">
          <div className="container">
            <h2>Dịch Vụ Chuyên Khoa</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🔬</div>
                <h3>Xét Nghiệm Y Khoa</h3>
                <p>
                  Xét nghiệm toàn diện với công nghệ PCR Real-time và ELISA thế hệ mới nhất
                </p>
                <div className="service-features">
                  <span className="feature">✓ Kết quả trong 6-24h</span>
                  <span className="feature">✓ Độ chính xác 99.95%</span>
                  <span className="feature">✓ ISO 15189:2012 Certified</span>
                </div>
                <Link to="/services" className="service-link">
                  Xem chi tiết
                </Link>
              </div>

              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Theo Dõi Sức Khỏe</h3>
                <p>
                  Hệ thống theo dõi sức khỏe thông minh với công nghệ AI hiện đại
                </p>
                <div className="service-features">
                  <span className="feature">✓ Phân tích AI thông minh</span>
                  <span className="feature">✓ Báo cáo chi tiết</span>
                  <span className="feature">✓ Theo dõi liên tục</span>
                </div>
                <Link to="/services" className="service-link">
                  Trải nghiệm ngay
                </Link>
              </div>

              <div className="service-card">
                <div className="service-icon">👩‍⚕️</div>
                <h3>Tư Vấn Trực Tuyến</h3>
                <p>
                  Tư vấn y tế từ xa với đội ngũ bác sĩ chuyên nghiệp 24/7
                </p>
                <div className="service-features">
                  <span className="feature">✓ Bác sĩ chuyên khoa</span>
                  <span className="feature">✓ Hỗ trợ 24/7</span>
                  <span className="feature">✓ Bảo mật tuyệt đối</span>
                </div>
                <Link to="/booking" className="service-link">
                  Tư vấn ngay
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
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
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Bắt Đầu Hành Trình Chăm Sóc Sức Khỏe</h2>
            <p>
              Đăng ký ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia hàng đầu
            </p>
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
              <Link to="/booking" className="btn-primary">
                Đặt Lịch Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;