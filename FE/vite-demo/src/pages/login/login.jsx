import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthenTemplate from "../../components/authen-template";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call (since no backend yet)
    setTimeout(() => {
      if (formData.email && formData.password) {
        console.log('Login successful:', formData);
        alert('Login successful! (This is just a demo)');
        // Here you would normally redirect to dashboard
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };  return (
    <AuthenTemplate pageTitle="Đăng nhập | GenderCare">
      <div className="login-content">
        <div className="login-header">
          <h1>Chào mừng trở lại</h1>
          <p>Đăng nhập vào hệ thống quản lý dịch vụ chăm sóc sức khỏe giới tính</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập địa chỉ email của bạn"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Ghi nhớ đăng nhập</span>
            </label>            <a href="#" className="forgot-password">Quên mật khẩu?</a>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>

        <div className="login-footer">
          <div className="privacy-notice">
            <p className="privacy-text">
              <span className="privacy-icon">🔒</span>
              Thông tin của bạn được bảo mật tuyệt đối theo tiêu chuẩn y tế quốc tế
            </p>
          </div>
          <p>Chưa có tài khoản? <Link to="/register" className="signup-link">Đăng ký ngay</Link></p>
        </div>
      </div>
    </AuthenTemplate>
  );
}

export default Login;
