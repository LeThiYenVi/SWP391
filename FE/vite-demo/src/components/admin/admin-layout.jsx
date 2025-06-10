import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './admin-layout.css';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const menuItems = [
    {
      path: '/admin/dashboard',
      icon: '🏠',
      label: 'Dashboard',
      description: 'Tổng quan hệ thống'
    },
    {
      path: '/admin/users',
      icon: '👥',
      label: 'Quản lý người dùng',
      description: 'Quản lý tài khoản và vai trò'
    },
    {
      path: '/admin/consultants',
      icon: '👨‍⚕️',
      label: 'Quản lý bác sĩ',
      description: 'Quản lý bác sĩ tư vấn'
    },
    {
      path: '/admin/bookings',
      icon: '📅',
      label: 'Quản lý đặt lịch',
      description: 'Theo dõi lịch hẹn'
    },
    {
      path: '/admin/consultations',
      icon: '💬',
      label: 'Tư vấn',
      description: 'Quản lý buổi tư vấn'
    },
    {
      path: '/admin/payments',
      icon: '💳',
      label: 'Thanh toán',
      description: 'Quản lý giao dịch'
    },
    {
      path: '/admin/reports',
      icon: '📊',
      label: 'Báo cáo',
      description: 'Thống kê và phân tích'
    },
    {
      path: '/admin/settings',
      icon: '⚙️',
      label: 'Cài đặt',
      description: 'Cấu hình hệ thống'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className={`admin-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            {sidebarOpen && (
              <div className="logo-text">
                <div className="logo-title">GenderCare</div>
                <div className="logo-subtitle">Admin Panel</div>
              </div>
            )}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={toggleSidebar}
            title={sidebarOpen ? 'Thu gọn sidebar' : 'Mở rộng sidebar'}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                  title={!sidebarOpen ? item.label : ''}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {sidebarOpen && (
                    <div className="nav-content">
                      <span className="nav-label">{item.label}</span>
                      <span className="nav-description">{item.description}</span>
                    </div>
                  )}
                  {isActivePath(item.path) && <div className="active-indicator"></div>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          {sidebarOpen && (
            <div className="system-info">
              <div className="system-status">
                <span className="status-indicator online"></span>
                <span className="status-text">System Online</span>
              </div>
              <div className="version-info">v2.1.0</div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Top Header */}
        <header className="admin-header">
          <div className="header-left">
            <button 
              className="mobile-menu-toggle"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            <div className="breadcrumb">
              <span className="breadcrumb-home">🏠</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">
                {menuItems.find(item => isActivePath(item.path))?.label || 'Admin'}
              </span>
            </div>
          </div>

          <div className="header-right">
            {/* Notifications */}
            <div className="header-notifications">
              <button className="notification-btn" title="Thông báo">
                🔔
                <span className="notification-badge">3</span>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="header-actions">
              <button className="action-btn" title="Tìm kiếm nhanh">
                🔍
              </button>
              <button className="action-btn" title="Trợ giúp">
                ❓
              </button>
            </div>

            {/* User Menu */}
            <div className="user-menu">
              <button 
                className="user-menu-toggle"
                onClick={toggleUserMenu}
              >
                <div className="user-avatar">
                  <span>A</span>
                </div>
                <div className="user-info">
                  <div className="user-name">Admin User</div>
                  <div className="user-role">Quản trị viên</div>
                </div>
                <span className="dropdown-arrow">▼</span>
              </button>

              {userMenuOpen && (
                <div className="user-menu-dropdown">
                  <a href="#profile" className="dropdown-item">
                    <span className="dropdown-icon">👤</span>
                    Hồ sơ cá nhân
                  </a>
                  <a href="#settings" className="dropdown-item">
                    <span className="dropdown-icon">⚙️</span>
                    Cài đặt tài khoản
                  </a>
                  <a href="#help" className="dropdown-item">
                    <span className="dropdown-icon">❓</span>
                    Trợ giúp
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#logout" className="dropdown-item logout">
                    <span className="dropdown-icon">🚪</span>
                    Đăng xuất
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-content">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
