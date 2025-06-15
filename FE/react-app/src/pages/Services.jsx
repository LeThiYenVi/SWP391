import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Xét Nghiệm STIs Chuẩn Quốc Tế",
      icon: "🔬",
      description:
        "Xét nghiệm toàn diện các bệnh lây truyền qua đường tình dục với công nghệ PCR Real-time và ELISA thế hệ mới",
      features: [
        "Xét nghiệm HIV, Giang mai, Lậu, Chlamydia, HPV theo chuẩn WHO",
        "Công nghệ PCR Real-time độ nhạy cao 99.8%",
        "Kết quả nhanh trong 24-48 giờ",
        "Bảo mật thông tin theo chuẩn HIPAA",
        "Tư vấn kết quả miễn phí bởi bác sĩ chuyên khoa",
      ],
      price: "500,000 - 1,500,000 VNĐ",
      duration: "30-45 phút",
      certification: "Chứng nhận ISO 15189:2012",
    },
    {
      id: 2,
      title: "Ứng Dụng Theo Dõi Chu Kỳ AI",
      icon: "📊",
      description:
        "Ứng dụng thông minh sử dụng trí tuệ nhân tạo để theo dõi chu kỳ kinh nguyệt và dự đoán thời gian rụng trứng",
      features: [
        "Thuật toán AI dự đoán chu kỳ chính xác 95%+",
        "Thông báo thông minh theo múi giờ cá nhân",
        "Nhắc nhở uống thuốc tránh thai",
        "Theo dõi triệu chứng và cảm xúc hàng ngày",
        "Báo cáo sức khỏe sinh sản định kỳ",
      ],
      price: "Miễn phí - 199,000 VNĐ/năm (Premium)",
      duration: "Sử dụng thường xuyên",
      certification: "Chứng nhận FDA Class II",
    },
    {
      id: 3,
      title: "Tư Vấn Chuyên Gia Trực Tuyến",
      icon: "👩‍⚕️",
      description:
        "Tư vấn từ xa 1-1 với đội ngũ bác sĩ chuyên khoa có chứng chỉ hành nghề, bảo mật end-to-end",
      features: [
        "Bác sĩ chuyên khoa Sản phụ, Nam khoa, Da liễu",
        "Tư vấn qua video call bảo mật AES-256",
        "Lịch hẹn linh hoạt 6h-22h hàng ngày",
        "Hồ sơ y tế điện tử an toàn",
        "Kê đơn thuốc điện tử hợp pháp",
      ],
      price: "200,000 - 500,000 VNĐ/buổi",
      duration: "30-60 phút",
      certification: "Giấy phép Telemedicine",
    },
    {
      id: 4,
      title: "Cộng Đồng Hỏi Đáp Y Khoa",
      icon: "💬",
      description:
        "Nền tảng hỏi đáp uy tín với sự tham gia của các chuyên gia từ Hội Y học Việt Nam",
      features: [
        "Chuyên gia từ BV Bạch Mai, Chợ Rẫy, Từ Dũ",
        "Hỏi đáp ẩn danh bảo vệ quyền riêng tư",
        "Phản hồi chuyên nghiệp trong 24 giờ",
        "Thư viện 10,000+ câu hỏi đã giải đáp",
        "Kiểm duyệt nội dung bởi ban biên tập y khoa",
      ],
      price: "50,000 VNĐ/câu hỏi",
      duration: "Phản hồi trong 24h",
      certification: "Hội Y học Việt Nam kiểm duyệt",
    },
    {
      id: 5,
      title: "Trung Tâm Giáo Dục Y Khoa",
      icon: "📚",
      description:
        "Nội dung giáo dục chuyên sâu được biên soạn bởi các chuyên gia và kiểm duyệt bởi Hội Y học Việt Nam",
      features: [
        "Nội dung được biên soạn bởi PGS.TS hàng đầu",
        "Video giáo dục chất lượng 4K với phụ đề",
        "Tài liệu tham khảo từ các tạp chí y khoa uy tín",
        "Khóa học trực tuyến có chứng nhận",
        "Cập nhật theo nghiên cứu y học mới nhất",
      ],
      price: "Miễn phí - 299,000 VNĐ/khóa học",
      duration: "Tự học theo tiến độ",
      certification: "Chứng nhận CME quốc tế",
    },
    {
      id: 6,
      title: "Hệ Thống Đánh Giá Minh Bạch",
      icon: "⭐",
      description:
        "Nền tảng đánh giá công khai, minh bạch với xác thực danh tính từ bệnh nhân thực",
      features: [
        "Xác thực đánh giá bằng số điện thoại/CCCD",
        "Chống fake review bằng AI detection",
        "Báo cáo chất lượng dịch vụ hàng tháng",
        "Phản hồi và cải thiện dịch vụ liên tục",
        "Minh bạch thông tin về đội ngũ y bác sĩ",
      ],
      price: "Miễn phí",
      duration: "5-10 phút",
      certification: "Chứng nhận TrustPilot",
    },
  ];
  return (
    <Layout>
      <div className="services-container">
      {" "}
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-brand">
          <h2>🏥 VietHealth Medical Center</h2>
          <span className="certification">
            Giấy phép hoạt động số: 123/GP-SKHCN
          </span>
        </div>
        <div className="nav-menu">
          <Link to="/home" className="nav-link">
            Trang Chủ
          </Link>
          <Link to="/services" className="nav-link active">
            Dịch Vụ
          </Link>
          <Link to="/booking" className="nav-link">
            Đặt Lịch
          </Link>
          <Link to="/blog" className="nav-link">
            Tin Tức Y Khoa
          </Link>
          <Link to="/profile" className="nav-link">
            Hồ Sơ
          </Link>
          <Link to="/login" className="nav-link logout">
            Đăng Xuất
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Dịch Vụ Y Tế Chuyên Khoa Hàng Đầu</h1>
            <p>
              Cung cấp dịch vụ chăm sóc sức khỏe sinh sản toàn diện với đội ngũ
              chuyên gia có 15+ năm kinh nghiệm
            </p>
            <div className="hero-stats">
              <div className="stat">
                <strong>99.8%</strong>
                <span>Độ chính xác</span>
              </div>
              <div className="stat">
                <strong>24h</strong>
                <span>Có kết quả</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Bảo mật</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>

                <div className="service-features">
                  <h4>Tính năng nổi bật:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-info">
                  <div className="info-item">
                    <span className="info-label">Giá:</span>
                    <span className="info-value">{service.price}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Thời gian:</span>
                    <span className="info-value">{service.duration}</span>
                  </div>
                </div>

                <div className="service-actions">
                  <Link to="/booking" className="btn-primary">
                    Đặt Lịch Ngay
                  </Link>
                  <button className="btn-secondary">Tìm Hiểu Thêm</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Cần Tư Vấn Thêm?</h2>
            <p>Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn-primary">
                Đặt Lịch Tư Vấn
              </Link>
              <a href="tel:1900-xxxx" className="btn-secondary">
                Gọi Hotline: 1900-xxxx
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Câu Hỏi Thường Gặp</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Thông tin của tôi có được bảo mật không?</h4>
              <p>
                Chúng tôi cam kết bảo mật thông tin cá nhân 100% theo tiêu chuẩn
                quốc tế HIPAA.
              </p>
            </div>
            <div className="faq-item">
              <h4>Làm thế nào để đặt lịch hẹn?</h4>
              <p>
                Bạn có thể đặt lịch trực tuyến qua website hoặc gọi hotline
                1900-xxxx.
              </p>
            </div>
            <div className="faq-item">
              <h4>Chi phí xét nghiệm như thế nào?</h4>
              <p>
                Chi phí phụ thuộc vào loại xét nghiệm. Vui lòng liên hệ để biết
                báo giá chi tiết.
              </p>
            </div>
            <div className="faq-item">
              <h4>Kết quả xét nghiệm bao lâu có?</h4>
              <p>
                Hầu hết kết quả sẽ có trong 24-48 giờ, một số xét nghiệm đặc
                biệt có thể mất 3-5 ngày.
              </p>
            </div>
          </div>
        </div>
      </section>
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

export default Services;
