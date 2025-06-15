import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🏥 VietHealth Medical Center</h3>
          <p>Chăm sóc sức khỏe toàn diện với đội ngũ bác sĩ chuyên nghiệp và trang thiết bị hiện đại.</p>
          <div className="certifications-footer">
            <span>🏆 ISO 9001:2015</span>
            <span>⚕️ Bộ Y Tế Certificate</span>
            <span>🔒 HIPAA Compliant</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Dịch Vụ</h4>
          <ul>
            <li>Khám Tổng Quát</li>
            <li>Chuyên Khoa</li>
            <li>Xét Nghiệm</li>
            <li>Chẩn Đoán Hình Ảnh</li>
            <li>Vật Lý Trị Liệu</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Liên Hệ</h4>
          <div className="contact-info">
            <p>📍 123 Đường ABC, Quận XYZ, TP.HCM</p>
            <p>📞 Hotline: 1900-123-456</p>
            <p>✉️ Email: info@viethealth.com</p>
            <p>🕐 24/7 Cấp cứu</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Giờ Làm Việc</h4>
          <div className="schedule">
            <p><strong>Thứ 2 - Thứ 6:</strong> 7:00 - 19:00</p>
            <p><strong>Thứ 7:</strong> 7:00 - 17:00</p>
            <p><strong>Chủ Nhật:</strong> 8:00 - 16:00</p>
            <p><strong>Cấp Cứu:</strong> 24/7</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 VietHealth Medical Center. All rights reserved.</p>
        <div className="footer-links">
          <span>Chính sách bảo mật</span>
          <span>Điều khoản sử dụng</span>
          <span>Liên hệ</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
