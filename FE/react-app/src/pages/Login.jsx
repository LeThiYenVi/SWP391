import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const result = await login(formData);
    if (result.success) {
      navigate('/home');
    } else {
      setErrors({ submit: result.error || 'Login failed. Please try again.' });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    // Implement Google login functionality
    console.log('Google login clicked');
  };

  return (
    <div className="modern-auth-container">
      <div className="auth-left-section">
        <div className="auth-logo">
          <h1> Healthi</h1>
        </div>
        <div className="auth-image-container">
          {/* The image of medical professionals will be set as a background in CSS */}
        </div>
      </div>
      
      <div className="auth-right-section">
        <div className="auth-form-container">
          <button className="close-button"></button>
          
          <div className="auth-header">
            <h2>Welcome back</h2>
            <p>New to Musaki? <Link to="/register" className="signup-link">Sign up</Link></p>
          </div>
          
          <form onSubmit={handleSubmit} className="modern-auth-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Email address"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            
            <div className="form-group password-group">
              <label htmlFor="password">Your password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            
            <div className="form-group remember-me">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>
            
            {errors.submit && (
              <div className="error-message">{errors.submit}</div>
            )}
            
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
            </button>
            
            <div className="or-divider">
              <span>or</span>
            </div>
            
            <button 
              type="button" 
              className="google-auth-button"
              onClick={handleGoogleLogin}
            >
              <FaGoogle /> Continue with Google
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Chưa có tài khoản?
              <Link to="/register" className="auth-link">
                {' '}Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
