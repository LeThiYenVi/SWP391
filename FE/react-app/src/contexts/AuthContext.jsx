import { createContext, useContext, useState, useEffect } from 'react';
import { showSuccess, showError } from '../utils/notifications';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on initial load
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual API call
      const mockResponse = {
        user: {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: credentials.email,
          phone: '+84 123 456 789',
          avatar: null,
          role: 'patient'
        },
        token: 'mock-jwt-token'
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store user data and token
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      localStorage.setItem('token', mockResponse.token);
      
      setUser(mockResponse.user);
      showSuccess('Đăng nhập thành công!');
      
      return { success: true, user: mockResponse.user };
    } catch (error) {
      showError('Đăng nhập thất bại. Vui lòng thử lại.');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual API call
      const mockResponse = {
        user: {
          id: Date.now(),
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phone: '',
          avatar: null,
          role: 'patient'
        },
        token: 'mock-jwt-token'
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store user data and token
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      localStorage.setItem('token', mockResponse.token);
      
      setUser(mockResponse.user);
      showSuccess('Đăng ký thành công!');
      
      return { success: true, user: mockResponse.user };
    } catch (error) {
      showError('Đăng ký thất bại. Vui lòng thử lại.');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    showSuccess('Đăng xuất thành công!');
  };

  const updateProfile = async (updatedData) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual API call
      const updatedUser = { ...user, ...updatedData };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      showSuccess('Cập nhật thông tin thành công!');
      
      return { success: true, user: updatedUser };
    } catch (error) {
      showError('Cập nhật thông tin thất bại.');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
