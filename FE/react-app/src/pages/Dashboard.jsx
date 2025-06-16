import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout/Layout';
import { FaUserMd, FaCalendarAlt, FaFileAlt, FaHeart, FaAmbulance, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data - in real app, this would come from API
  const dashboardData = {
    upcomingAppointments: [
      {
        id: 1,
        doctor: 'Dr. Sarah Johnson',
        department: 'Cardiology',
        date: '2024-01-15',
        time: '10:00 AM'
      },
      {
        id: 2,
        doctor: 'Dr. Michael Chen',
        department: 'Dermatology',
        date: '2024-01-20',
        time: '2:30 PM'
      }
    ],
    recentTests: [
      {
        id: 1,
        test: 'Blood Test',
        date: '2024-01-10',
        status: 'Completed'
      },
      {
        id: 2,
        test: 'X-Ray Chest',
        date: '2024-01-08',
        status: 'Results Available'
      }
    ],
    healthMetrics: {
      lastCheckup: '2024-01-05',
      bloodPressure: '120/80',
      weight: '70 kg',
      heartRate: '72 bpm'
    },
    notifications: [
      {
        id: 1,
        message: 'Annual checkup reminder',
        date: '2024-01-12',
        type: 'reminder'
      },
      {
        id: 2,
        message: 'Test results available',
        date: '2024-01-11',
        type: 'alert'
      }
    ]
  };

  const quickActions = [
    {
      title: 'Book Appointment',
      icon: <FaCalendarAlt />,
      link: '/booking',
      color: '#007bff'
    },
    {
      title: 'View Doctors',
      icon: <FaUserMd />,
      link: '/doctors',
      color: '#28a745'
    },
    {
      title: 'Medical Records',
      icon: <FaFileAlt />,
      link: '/profile',
      color: '#6f42c1'
    },
    {
      title: 'Emergency',
      icon: <FaAmbulance />,
      link: '/emergency',
      color: '#dc3545'
    }
  ];

  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome back, {user?.fullName || 'User'}!</h1>
          <p>Here's your health dashboard overview</p>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link} className="action-card">
                <div className="action-icon" style={{ color: action.color }}>
                  {action.icon}
                </div>
                <h3>{action.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="dashboard-grid">
          {/* Upcoming Appointments */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3><FaCalendarAlt /> Upcoming Appointments</h3>
              <Link to="/booking" className="view-all">View All</Link>
            </div>
            <div className="card-content">
              {dashboardData.upcomingAppointments.length > 0 ? (
                dashboardData.upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="appointment-item">
                    <div className="appointment-info">
                      <h4>{appointment.doctor}</h4>
                      <p>{appointment.department}</p>
                    </div>
                    <div className="appointment-time">
                      <span className="date">{appointment.date}</span>
                      <span className="time">{appointment.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-data">No upcoming appointments</p>
              )}
            </div>
          </div>

          {/* Health Metrics */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3><FaHeart /> Health Metrics</h3>
            </div>
            <div className="card-content">
              <div className="metrics-grid">
                <div className="metric-item">
                  <label>Blood Pressure</label>
                  <span>{dashboardData.healthMetrics.bloodPressure}</span>
                </div>
                <div className="metric-item">
                  <label>Weight</label>
                  <span>{dashboardData.healthMetrics.weight}</span>
                </div>
                <div className="metric-item">
                  <label>Heart Rate</label>
                  <span>{dashboardData.healthMetrics.heartRate}</span>
                </div>
                <div className="metric-item">
                  <label>Last Checkup</label>
                  <span>{dashboardData.healthMetrics.lastCheckup}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tests */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3><FaFileAlt /> Recent Tests</h3>
              <Link to="/profile" className="view-all">View All</Link>
            </div>
            <div className="card-content">
              {dashboardData.recentTests.map(test => (
                <div key={test.id} className="test-item">
                  <div className="test-info">
                    <h4>{test.test}</h4>
                    <span className="test-date">{test.date}</span>
                  </div>
                  <span className={`test-status ${test.status.toLowerCase().replace(' ', '-')}`}>
                    {test.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3><FaBell /> Notifications</h3>
            </div>
            <div className="card-content">
              {dashboardData.notifications.map(notification => (
                <div key={notification.id} className="notification-item">
                  <div className={`notification-type ${notification.type}`}></div>
                  <div className="notification-content">
                    <p>{notification.message}</p>
                    <span className="notification-date">{notification.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="health-tips">
          <h2>Health Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Stay Hydrated</h4>
              <p>Drink at least 8 glasses of water daily to maintain optimal health.</p>
            </div>
            <div className="tip-card">
              <h4>Regular Exercise</h4>
              <p>Aim for 30 minutes of moderate exercise 5 days a week.</p>
            </div>
            <div className="tip-card">
              <h4>Balanced Diet</h4>
              <p>Include fruits, vegetables, and whole grains in your daily meals.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
