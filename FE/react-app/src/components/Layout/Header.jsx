import { Link, useNavigate } from "react-router-dom";
import { 
  FaHome, 
  FaCogs, 
  FaCalendarAlt, 
  FaNewspaper, 
  FaUser, 
  FaSignOutAlt, 
  FaSignInAlt, 
  FaUserMd, 
  FaAmbulance, 
  FaPhone,
  FaTachometerAlt
} from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>🏥 VietHealth Medical Center</h2>
        <span className="certification">
          Giấy phép Bộ Y Tế số: 123456/BYT-KBCB | ISO 9001:2015 Certificate
        </span>
      </div>      <div className="nav-menu">
        <Link to="/home" className="nav-link">
          <FaHome className="nav-icon" />
          Trang Chủ
        </Link>        <Link to="/services" className="nav-link">
          <FaCogs className="nav-icon" />
          Dịch Vụ
        </Link>
        <Link to="/doctors" className="nav-link">
          <FaUserMd className="nav-icon" />
          Bác Sĩ
        </Link>
        <Link to="/blog" className="nav-link">
          <FaNewspaper className="nav-icon" />
          Tin Tức Y Khoa
        </Link>
        <Link to="/emergency" className="nav-link emergency-link">
          <FaAmbulance className="nav-icon" />
          Cấp Cứu
        </Link>
        <Link to="/contact" className="nav-link">
          <FaPhone className="nav-icon" />
          Liên Hệ
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="nav-link">
              <FaTachometerAlt className="nav-icon" />
              Dashboard
            </Link>
            <Link to="/booking" className="nav-link">
              <FaCalendarAlt className="nav-icon" />
              Đặt Lịch
            </Link>
            <Link to="/profile" className="nav-link">
              <FaUser className="nav-icon" />
              {user?.firstName || 'Hồ Sơ'}
            </Link>
            <button onClick={handleLogout} className="nav-link logout">
              <FaSignOutAlt className="nav-icon" />
              Đăng Xuất
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <FaSignInAlt className="nav-icon" />
            Đăng Nhập
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
