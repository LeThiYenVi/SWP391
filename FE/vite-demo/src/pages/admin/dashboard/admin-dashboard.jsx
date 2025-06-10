import React, { useState, useEffect } from 'react';
import './admin-dashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalConsultants: 0,
    totalBookings: 0,
    totalRevenue: 0,
    pendingBookings: 0,
    activeConsultations: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Simulate API calls
    setStats({
      totalUsers: 1247,
      totalConsultants: 28,
      totalBookings: 892,
      totalRevenue: 450000000,
      pendingBookings: 15,
      activeConsultations: 8
    });

    setRecentActivities([
      { id: 1, type: 'booking', message: 'New booking from Nguyễn Văn A', time: '5 phút trước' },
      { id: 2, type: 'user', message: 'User mới đăng ký: user@example.com', time: '15 phút trước' },
      { id: 3, type: 'consultation', message: 'Consultation hoàn thành với BS. Trần', time: '30 phút trước' },
      { id: 4, type: 'payment', message: 'Thanh toán thành công: 500,000 VNĐ', time: '1 giờ trước' }
    ]);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>🏥 Admin Dashboard - GenderCare</h1>
        <div className="dashboard-date">
          {new Date().toLocaleDateString('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Tổng người dùng</h3>
            <div className="stat-number">{stats.totalUsers.toLocaleString()}</div>
            <div className="stat-trend positive">+12% so với tháng trước</div>
          </div>
        </div>

        <div className="stat-card secondary">
          <div className="stat-icon">👨‍⚕️</div>
          <div className="stat-content">
            <h3>Bác sĩ tư vấn</h3>
            <div className="stat-number">{stats.totalConsultants}</div>
            <div className="stat-trend positive">+2 bác sĩ mới</div>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>Tổng booking</h3>
            <div className="stat-number">{stats.totalBookings.toLocaleString()}</div>
            <div className="stat-trend positive">+8% tuần này</div>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Doanh thu</h3>
            <div className="stat-number">{formatCurrency(stats.totalRevenue)}</div>
            <div className="stat-trend positive">+15% tháng này</div>
          </div>
        </div>
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="dashboard-content">
        <div className="dashboard-section">
          <div className="section-card">
            <h2>⚡ Thao tác nhanh</h2>
            <div className="quick-actions">
              <button className="action-btn primary">
                <span className="btn-icon">➕</span>
                Thêm bác sĩ mới
              </button>
              <button className="action-btn secondary">
                <span className="btn-icon">📊</span>
                Xem báo cáo
              </button>
              <button className="action-btn success">
                <span className="btn-icon">✅</span>
                Duyệt booking ({stats.pendingBookings})
              </button>
              <button className="action-btn warning">
                <span className="btn-icon">⚙️</span>
                Cài đặt hệ thống
              </button>
            </div>
          </div>

          <div className="section-card">
            <h2>📈 Thống kê nhanh</h2>
            <div className="quick-stats">
              <div className="quick-stat-item">
                <span className="stat-label">Booking chờ duyệt:</span>
                <span className="stat-value pending">{stats.pendingBookings}</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-label">Consultation đang diễn ra:</span>
                <span className="stat-value active">{stats.activeConsultations}</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-label">Tỷ lệ hài lòng:</span>
                <span className="stat-value success">94.5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <div className="section-card full-width">
            <h2>🔔 Hoạt động gần đây</h2>
            <div className="activities-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className={`activity-item ${activity.type}`}>
                  <div className="activity-icon">
                    {activity.type === 'booking' && '📅'}
                    {activity.type === 'user' && '👤'}
                    {activity.type === 'consultation' && '💬'}
                    {activity.type === 'payment' && '💳'}
                  </div>
                  <div className="activity-content">
                    <p>{activity.message}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Health Status */}
      <div className="system-status">
        <h2>🔧 Trạng thái hệ thống</h2>
        <div className="status-grid">
          <div className="status-item healthy">
            <span className="status-indicator"></span>
            <span className="status-label">Database</span>
            <span className="status-value">Hoạt động tốt</span>
          </div>
          <div className="status-item healthy">
            <span className="status-indicator"></span>
            <span className="status-label">API Server</span>
            <span className="status-value">Hoạt động tốt</span>
          </div>
          <div className="status-item warning">
            <span className="status-indicator"></span>
            <span className="status-label">Storage</span>
            <span className="status-value">Sử dụng 78%</span>
          </div>
          <div className="status-item healthy">
            <span className="status-indicator"></span>
            <span className="status-label">Security</span>
            <span className="status-value">Bảo mật tốt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
