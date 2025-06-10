import React, { useState, useEffect } from 'react';
import './reports.css';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');
  const [reportData, setReportData] = useState({});

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockData = {
      overview: {
        totalRevenue: 125000000,
        totalBookings: 456,
        completedBookings: 389,
        cancelledBookings: 67,
        newUsers: 123,
        activeConsultants: 15,
        averageRating: 4.7,
        conversionRate: 85.2
      },
      revenue: {
        daily: [
          { date: '2024-06-01', amount: 2500000 },
          { date: '2024-06-02', amount: 3200000 },
          { date: '2024-06-03', amount: 1800000 },
          { date: '2024-06-04', amount: 4100000 },
          { date: '2024-06-05', amount: 2900000 },
          { date: '2024-06-06', amount: 3600000 },
          { date: '2024-06-07', amount: 2100000 }
        ],
        byService: [
          { service: 'Tư vấn sức khỏe giới tính', amount: 45000000, percentage: 36 },
          { service: 'Khám tổng quát', amount: 38000000, percentage: 30.4 },
          { service: 'Tư vấn tâm lý', amount: 22000000, percentage: 17.6 },
          { service: 'Khám sức khỏe sinh sản', amount: 20000000, percentage: 16 }
        ]
      },
      users: {
        growth: [
          { month: 'Jan', users: 850 },
          { month: 'Feb', users: 920 },
          { month: 'Mar', users: 1150 },
          { month: 'Apr', users: 1080 },
          { month: 'May', users: 1320 },
          { month: 'Jun', users: 1247 }
        ],
        demographics: [
          { age: '18-25', count: 312, percentage: 25 },
          { age: '26-35', count: 435, percentage: 35 },
          { age: '36-45', count: 374, percentage: 30 },
          { age: '46+', count: 126, percentage: 10 }
        ],
        genderDistribution: [
          { gender: 'Nữ', count: 748, percentage: 60 },
          { gender: 'Nam', count: 499, percentage: 40 }
        ]
      },
      performance: {
        consultants: [
          { name: 'BS. Trần Thị A', bookings: 89, rating: 4.9, revenue: 22500000 },
          { name: 'BS. Nguyễn Văn B', bookings: 76, rating: 4.8, revenue: 19200000 },
          { name: 'BS. Lê Thị C', bookings: 71, rating: 4.7, revenue: 17800000 },
          { name: 'BS. Phạm Minh D', bookings: 65, rating: 4.6, revenue: 16250000 }
        ],
        services: [
          { service: 'Tư vấn sức khỏe giới tính', bookings: 156, satisfaction: 4.8 },
          { service: 'Khám tổng quát', bookings: 134, satisfaction: 4.7 },
          { service: 'Tư vấn tâm lý', bookings: 98, satisfaction: 4.9 },
          { service: 'Khám sức khỏe sinh sản', bookings: 68, satisfaction: 4.6 }
        ]
      }
    };
    
    setReportData(mockData);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  const renderOverviewReport = () => (
    <div className="report-content">
      <div className="overview-stats">
        <div className="stat-row">
          <div className="stat-item revenue">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <h3>Tổng doanh thu</h3>
              <div className="stat-value">{formatCurrency(reportData.overview?.totalRevenue || 0)}</div>
              <div className="stat-trend positive">+15.2% so với tháng trước</div>
            </div>
          </div>
          
          <div className="stat-item bookings">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <h3>Tổng lịch hẹn</h3>
              <div className="stat-value">{reportData.overview?.totalBookings || 0}</div>
              <div className="stat-trend positive">+8.7% so với tháng trước</div>
            </div>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat-item users">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>Người dùng mới</h3>
              <div className="stat-value">{reportData.overview?.newUsers || 0}</div>
              <div className="stat-trend positive">+12.3% so với tháng trước</div>
            </div>
          </div>
          
          <div className="stat-item rating">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <h3>Đánh giá trung bình</h3>
              <div className="stat-value">{reportData.overview?.averageRating || 0}/5</div>
              <div className="stat-trend positive">+0.2 so với tháng trước</div>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>📈 Biểu đồ doanh thu 7 ngày gần nhất</h3>
          <div className="bar-chart">
            {reportData.revenue?.daily?.map((day, index) => (
              <div key={index} className="bar-item">
                <div 
                  className="bar" 
                  style={{ 
                    height: `${(day.amount / 4500000) * 100}px`,
                    background: `linear-gradient(45deg, #667eea, #764ba2)`
                  }}
                ></div>
                <div className="bar-label">
                  {new Date(day.date).getDate()}/{new Date(day.date).getMonth() + 1}
                </div>
                <div className="bar-value">{formatCurrency(day.amount)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h3>🍰 Doanh thu theo dịch vụ</h3>
          <div className="pie-chart-legend">
            {reportData.revenue?.byService?.map((service, index) => (
              <div key={index} className="legend-item">
                <div 
                  className="legend-color" 
                  style={{ 
                    background: `hsl(${index * 90 + 220}, 60%, 60%)` 
                  }}
                ></div>
                <div className="legend-info">
                  <div className="legend-name">{service.service}</div>
                  <div className="legend-value">
                    {formatCurrency(service.amount)} ({formatPercentage(service.percentage)})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserReport = () => (
    <div className="report-content">
      <div className="user-analytics">
        <div className="analytics-section">
          <h3>👥 Phân bố người dùng theo độ tuổi</h3>
          <div className="demographics-chart">
            {reportData.users?.demographics?.map((demo, index) => (
              <div key={index} className="demo-item">
                <div className="demo-label">{demo.age}</div>
                <div className="demo-bar">
                  <div 
                    className="demo-fill" 
                    style={{ 
                      width: `${demo.percentage}%`,
                      background: `linear-gradient(90deg, #667eea, #764ba2)`
                    }}
                  ></div>
                </div>
                <div className="demo-stats">
                  <span className="demo-count">{demo.count} người</span>
                  <span className="demo-percentage">{formatPercentage(demo.percentage)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-section">
          <h3>⚧️ Phân bố theo giới tính</h3>
          <div className="gender-chart">
            {reportData.users?.genderDistribution?.map((gender, index) => (
              <div key={index} className="gender-item">
                <div className="gender-icon">
                  {gender.gender === 'Nữ' ? '♀️' : '♂️'}
                </div>
                <div className="gender-info">
                  <div className="gender-label">{gender.gender}</div>
                  <div className="gender-count">{gender.count} người</div>
                  <div className="gender-percentage">{formatPercentage(gender.percentage)}</div>
                </div>
                <div className="gender-visual">
                  <div 
                    className="gender-circle"
                    style={{
                      background: gender.gender === 'Nữ' 
                        ? 'linear-gradient(45deg, #f093fb, #f5576c)'
                        : 'linear-gradient(45deg, #4facfe, #00f2fe)',
                      width: `${gender.percentage * 2}px`,
                      height: `${gender.percentage * 2}px`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-section full-width">
          <h3>📈 Tăng trưởng người dùng theo tháng</h3>
          <div className="growth-chart">
            {reportData.users?.growth?.map((month, index) => (
              <div key={index} className="growth-item">
                <div 
                  className="growth-bar"
                  style={{ 
                    height: `${(month.users / 1400) * 150}px`,
                    background: `linear-gradient(180deg, #667eea, #764ba2)`
                  }}
                ></div>
                <div className="growth-label">{month.month}</div>
                <div className="growth-value">{month.users}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPerformanceReport = () => (
    <div className="report-content">
      <div className="performance-section">
        <h3>🏆 Top bác sĩ tư vấn</h3>
        <div className="consultant-ranking">
          {reportData.performance?.consultants?.map((consultant, index) => (
            <div key={index} className={`consultant-item rank-${index + 1}`}>
              <div className="consultant-rank">#{index + 1}</div>
              <div className="consultant-info">
                <div className="consultant-name">{consultant.name}</div>
                <div className="consultant-stats">
                  <span>📅 {consultant.bookings} lịch hẹn</span>
                  <span>⭐ {consultant.rating}/5</span>
                  <span>💰 {formatCurrency(consultant.revenue)}</span>
                </div>
              </div>
              <div className="consultant-medal">
                {index === 0 && '🥇'}
                {index === 1 && '🥈'}
                {index === 2 && '🥉'}
                {index > 2 && '🏅'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="performance-section">
        <h3>🏥 Hiệu suất dịch vụ</h3>
        <div className="service-performance">
          {reportData.performance?.services?.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-name">{service.service}</div>
              <div className="service-metrics">
                <div className="metric">
                  <span className="metric-label">Số lượng:</span>
                  <span className="metric-value">{service.bookings}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Hài lòng:</span>
                  <span className="metric-value">{service.satisfaction}/5 ⭐</span>
                </div>
              </div>
              <div className="service-progress">
                <div 
                  className="progress-bar"
                  style={{ 
                    width: `${(service.satisfaction / 5) * 100}%`,
                    background: service.satisfaction >= 4.5 
                      ? 'linear-gradient(90deg, #48bb78, #38a169)'
                      : service.satisfaction >= 4.0
                      ? 'linear-gradient(90deg, #ed8936, #dd6b20)'
                      : 'linear-gradient(90deg, #f56565, #e53e3e)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="reports">
      <div className="page-header">
        <h1>📊 Báo cáo thống kê</h1>
        <div className="header-controls">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="period-select"
          >
            <option value="week">Tuần này</option>
            <option value="month">Tháng này</option>
            <option value="quarter">Quý này</option>
            <option value="year">Năm này</option>
          </select>
          <button className="btn btn-primary">
            <span className="btn-icon">📥</span>
            Xuất báo cáo
          </button>
        </div>
      </div>

      <div className="report-tabs">
        <button 
          className={`tab-btn ${selectedReport === 'overview' ? 'active' : ''}`}
          onClick={() => setSelectedReport('overview')}
        >
          📈 Tổng quan
        </button>
        <button 
          className={`tab-btn ${selectedReport === 'users' ? 'active' : ''}`}
          onClick={() => setSelectedReport('users')}
        >
          👥 Người dùng
        </button>
        <button 
          className={`tab-btn ${selectedReport === 'performance' ? 'active' : ''}`}
          onClick={() => setSelectedReport('performance')}
        >
          🏆 Hiệu suất
        </button>
      </div>

      <div className="report-container">
        {selectedReport === 'overview' && renderOverviewReport()}
        {selectedReport === 'users' && renderUserReport()}
        {selectedReport === 'performance' && renderPerformanceReport()}
      </div>
    </div>
  );
};

export default Reports;
