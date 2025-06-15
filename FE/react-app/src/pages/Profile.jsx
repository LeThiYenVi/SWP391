import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import HealthAnalytics from "../components/Analytics/HealthAnalytics";
import MedicalReport from "../components/Reports/MedicalReport";
import { useAuth } from "../contexts/AuthContext";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaEdit, 
  FaSave, 
  FaTimes,   FaFileMedical,
  FaFileAlt,
  FaHeartbeat,
  FaPrescriptionBottle,
  FaDownload,
  FaEye,
  FaClipboardList,
  FaHistory,
  FaAllergies,
  FaTint,
  FaWeight,
  FaRuler,
  FaThermometerHalf,
  FaChartLine,
  FaFileDownload
} from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [userInfo, setUserInfo] = useState({
    fullName: user ? `${user.firstName} ${user.lastName}` : "John Smith",
    email: user?.email || "john.smith@email.com",
    phone: user?.phone || "+1 (555) 123-4567",
    address: "123 Main Street, Medical District, MD 12345",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    emergencyContact: "+1 (555) 987-6543",
    bloodType: "O+",
    allergies: "Penicillin, Shellfish",
    insuranceNumber: "INS123456789",
    height: "5'10\"",
    weight: "175 lbs",
    occupation: "Software Engineer"
  });

  const [medicalHistory, setMedicalHistory] = useState([
    {
      id: 1,
      date: "2024-12-15",
      condition: "Annual Physical Examination",
      doctor: "Dr. Sarah Johnson",
      department: "Internal Medicine",
      notes: "Overall health excellent. Continue current wellness routine.",
      status: "Completed"
    },
    {
      id: 2,
      date: "2024-10-22",
      condition: "Blood Pressure Monitoring",
      doctor: "Dr. Michael Chen",
      department: "Cardiology",
      notes: "Blood pressure within normal range. No medication changes needed.",
      status: "Completed"
    },
    {
      id: 3,
      date: "2024-08-10",
      condition: "Skin Examination",
      doctor: "Dr. Emily Rodriguez",
      department: "Dermatology",
      notes: "No suspicious lesions found. Annual follow-up recommended.",
      status: "Completed"
    }
  ]);

  const [testResults, setTestResults] = useState([
    {
      id: 1,
      testName: "Complete Blood Count",
      date: "2024-12-15",
      result: "Normal",
      status: "Available",
      doctor: "Dr. Sarah Johnson",
      values: {
        "White Blood Cells": "7.2 K/uL (Normal: 4.0-11.0)",
        "Red Blood Cells": "4.8 M/uL (Normal: 4.2-5.4)",
        "Hemoglobin": "14.5 g/dL (Normal: 13.5-17.5)",
        "Platelets": "285 K/uL (Normal: 150-450)"
      }
    },
    {
      id: 2,
      testName: "Lipid Panel",
      date: "2024-12-15",
      result: "Normal",
      status: "Available",
      doctor: "Dr. Sarah Johnson",
      values: {
        "Total Cholesterol": "185 mg/dL (Normal: <200)",
        "LDL Cholesterol": "110 mg/dL (Normal: <100)",
        "HDL Cholesterol": "55 mg/dL (Normal: >40)",
        "Triglycerides": "120 mg/dL (Normal: <150)"
      }
    },
    {
      id: 3,
      testName: "Thyroid Function",
      date: "2024-10-05",
      result: "Normal",
      status: "Available",
      doctor: "Dr. Lisa Thompson",
      values: {
        "TSH": "2.1 mIU/L (Normal: 0.4-4.0)",
        "T4": "8.2 μg/dL (Normal: 4.5-12.0)",
        "T3": "145 ng/dL (Normal: 80-200)"
      }
    }
  ]);

  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      medication: "Lisinopril 10mg",
      prescribedBy: "Dr. Michael Chen",
      date: "2024-11-20",
      duration: "90 days",
      instructions: "Take once daily in the morning",
      refillsLeft: 2,
      status: "Active"
    },
    {
      id: 2,
      medication: "Vitamin D3 2000 IU",
      prescribedBy: "Dr. Sarah Johnson",
      date: "2024-12-15",
      duration: "180 days",
      instructions: "Take once daily with food",
      refillsLeft: 5,
      status: "Active"
    },
    {
      id: 3,
      medication: "Ibuprofen 400mg",
      prescribedBy: "Dr. James Wilson",
      date: "2024-09-15",
      duration: "14 days",
      instructions: "Take as needed for pain, max 3 times daily",
      refillsLeft: 0,
      status: "Completed"
    }
  ]);

  const [vitalSigns, setVitalSigns] = useState([
    {
      date: "2024-12-15",
      bloodPressure: "118/76",
      heartRate: "68",
      temperature: "98.6°F",
      weight: "175 lbs",
      height: "5'10\"",
      bmi: "25.1"
    },
    {
      date: "2024-10-22",
      bloodPressure: "120/78",
      heartRate: "72",
      temperature: "98.4°F",
      weight: "176 lbs",
      height: "5'10\"",
      bmi: "25.2"
    },
    {
      date: "2024-08-10",
      bloodPressure: "115/75",
      heartRate: "65",
      temperature: "98.7°F",
      weight: "174 lbs",
      height: "5'10\"",
      bmi: "24.9"
    }
  ]);

  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({ ...userInfo });
  useEffect(() => {
    // Mock appointment history
    const mockHistory = [
      {
        id: 1,
        date: "2024-12-15",
        time: "09:00 AM",
        doctor: "Dr. Sarah Johnson",
        department: "Internal Medicine",
        status: "Completed",
        diagnosis: "Annual Physical - Excellent Health",
        type: "In-person"
      },
      {
        id: 2,
        date: "2024-10-22",
        time: "2:30 PM",
        doctor: "Dr. Michael Chen",
        department: "Cardiology",
        status: "Completed",
        diagnosis: "Blood Pressure Follow-up - Normal",
        type: "In-person"
      },
      {
        id: 3,
        date: "2025-01-10",
        time: "10:00 AM",
        doctor: "Dr. Emily Rodriguez",
        department: "Dermatology",
        status: "Upcoming",
        diagnosis: "Annual Skin Check",
        type: "In-person"
      },
      {
        id: 4,
        date: "2024-09-15",
        time: "11:30 AM",
        doctor: "Dr. James Wilson",
        department: "Orthopedics",
        status: "Completed",
        diagnosis: "Knee Pain Consultation - Physical Therapy Recommended",
        type: "Telehealth"
      }    ];
    setAppointmentHistory(mockHistory);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedInfo({ ...userInfo });
  };
  const handleSave = async () => {
    const [firstName, ...lastNameParts] = editedInfo.fullName.split(' ');
    const lastName = lastNameParts.join(' ');
    
    const result = await updateProfile({
      firstName,
      lastName,
      phone: editedInfo.phone,
      // Add other profile fields as needed
    });
    
    if (result.success) {
      setUserInfo({ ...editedInfo });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedInfo({ ...userInfo });
  };

  const handleInputChange = (field, value) => {
    setEditedInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Đã hoàn thành":
        return "completed";
      case "Đã đặt lịch":
        return "scheduled";
      case "Đã hủy":
        return "cancelled";
      default:
        return "pending";
    }
  };
  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-hero">
          <div className="hero-content">
            <h1>Hồ Sơ Cá Nhân</h1>
            <p>Quản lý thông tin và lịch sử khám bệnh của bạn</p>
          </div>
        </div>

        <div className="profile-content">
          {/* Tab Navigation */}          <div className="profile-tabs">
            <button 
              className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              <FaUser className="tab-icon" />
              Personal Info
            </button>
            <button 
              className={`tab-btn ${activeTab === 'medical' ? 'active' : ''}`}
              onClick={() => setActiveTab('medical')}
            >
              <FaFileMedical className="tab-icon" />
              Medical History
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tests' ? 'active' : ''}`}
              onClick={() => setActiveTab('tests')}
            >
              <FaFileAlt className="tab-icon" />
              Test Results
            </button>
            <button 
              className={`tab-btn ${activeTab === 'prescriptions' ? 'active' : ''}`}
              onClick={() => setActiveTab('prescriptions')}
            >              <FaPrescriptionBottle className="tab-icon" />
              Prescriptions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'vitals' ? 'active' : ''}`}
              onClick={() => setActiveTab('vitals')}
            >
              <FaHeartbeat className="tab-icon" />
              Vital Signs
            </button>
            <button 
              className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              <FaCalendarAlt className="tab-icon" />
              Appointments
            </button>
            <button 
              className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <FaChartLine className="tab-icon" />
              Health Analytics
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              <FaFileDownload className="tab-icon" />
              Medical Reports
            </button>
          </div>{/* Tab Content */}
          {activeTab === 'personal' && (
            <div className="profile-grid">
              {/* Personal Information Section */}
              <div className="info-section">
                <div className="section-header">
                  <h2>Thông Tin Cá Nhân</h2>
                  {!isEditing ? (
                    <button className="edit-btn" onClick={handleEdit}>
                      <FaEdit /> Chỉnh sửa
                    </button>
                  ) : (
                    <div className="edit-actions">
                      <button className="save-btn" onClick={handleSave}>
                        <FaSave /> Lưu
                      </button>
                      <button className="cancel-btn" onClick={handleCancel}>
                        <FaTimes /> Hủy
                      </button>
                    </div>
                  )}
                </div>

                <div className="info-grid">
                <div className="info-item">
                  <label>
                    <FaUser className="info-icon" />
                    Họ và tên
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                  ) : (
                    <span>{userInfo.fullName}</span>
                  )}
                </div>

                <div className="info-item">
                  <label>
                    <FaEnvelope className="info-icon" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  ) : (
                    <span>{userInfo.email}</span>
                  )}
                </div>

                <div className="info-item">
                  <label>
                    <FaPhone className="info-icon" />
                    Số điện thoại
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  ) : (
                    <span>{userInfo.phone}</span>
                  )}
                </div>

                <div className="info-item">
                  <label>
                    <FaMapMarkerAlt className="info-icon" />
                    Địa chỉ
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  ) : (
                    <span>{userInfo.address}</span>
                  )}
                </div>

                <div className="info-item">
                  <label>
                    <FaCalendarAlt className="info-icon" />
                    Ngày sinh
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedInfo.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    />
                  ) : (
                    <span>{formatDate(userInfo.dateOfBirth)}</span>
                  )}
                </div>

                <div className="info-item">
                  <label>Giới tính</label>
                  {isEditing ? (
                    <select
                      value={editedInfo.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                    >
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </select>
                  ) : (
                    <span>{userInfo.gender}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Medical Information Section */}
            <div className="medical-section">
              <h2>Thông Tin Y Tế</h2>
              <div className="medical-grid">
                <div className="medical-item">
                  <label>Nhóm máu</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.bloodType}
                      onChange={(e) => handleInputChange('bloodType', e.target.value)}
                    />
                  ) : (
                    <span className="blood-type">{userInfo.bloodType}</span>
                  )}
                </div>

                <div className="medical-item">
                  <label>Dị ứng</label>
                  {isEditing ? (
                    <textarea
                      value={editedInfo.allergies}
                      onChange={(e) => handleInputChange('allergies', e.target.value)}
                      rows="2"
                    />
                  ) : (
                    <span>{userInfo.allergies}</span>
                  )}
                </div>

                <div className="medical-item">
                  <label>Số bảo hiểm</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.insuranceNumber}
                      onChange={(e) => handleInputChange('insuranceNumber', e.target.value)}
                    />
                  ) : (
                    <span>{userInfo.insuranceNumber}</span>
                  )}
                </div>

                <div className="medical-item">
                  <label>Liên hệ khẩn cấp</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedInfo.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    />
                  ) : (
                    <span>{userInfo.emergencyContact}</span>
                  )}
                </div>              </div>
            </div>
          </div>
          )}          {activeTab === 'medical' && (
            <div className="medical-history-tab">
              <div className="medical-section">
                <h2>Medical History</h2>
                <div className="medical-history-list">
                  {medicalHistory.map(record => (
                    <div key={record.id} className="medical-record-card">
                      <div className="record-header">
                        <div className="record-date">{new Date(record.date).toLocaleDateString()}</div>
                        <div className={`record-status ${record.status.toLowerCase()}`}>
                          {record.status}
                        </div>
                      </div>
                      <div className="record-content">
                        <h4>{record.condition}</h4>
                        <p><strong>Doctor:</strong> {record.doctor}</p>
                        <p><strong>Department:</strong> {record.department}</p>
                        <p><strong>Notes:</strong> {record.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="test-results-tab">
              <div className="test-section">
                <h2>Test Results</h2>
                <div className="test-results-list">
                  {testResults.map(test => (
                    <div key={test.id} className="test-result-card">
                      <div className="test-header">
                        <div className="test-info">
                          <h4>{test.testName}</h4>
                          <p>Ordered by: {test.doctor}</p>
                          <p>Date: {new Date(test.date).toLocaleDateString()}</p>
                        </div>
                        <div className="test-actions">
                          <div className={`test-status ${test.status.toLowerCase().replace(' ', '-')}`}>
                            {test.status}
                          </div>
                          <button className="view-btn">
                            <FaEye /> View Details
                          </button>
                          <button className="download-btn">
                            <FaDownload /> Download
                          </button>
                        </div>
                      </div>
                      <div className="test-values">
                        {Object.entries(test.values).map(([key, value]) => (
                          <div key={key} className="test-value-item">
                            <span className="test-name">{key}:</span>
                            <span className="test-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'prescriptions' && (
            <div className="prescriptions-tab">
              <div className="prescriptions-section">
                <h2>Current Prescriptions</h2>
                <div className="prescriptions-list">
                  {prescriptions.map(prescription => (
                    <div key={prescription.id} className="prescription-card">
                      <div className="prescription-header">
                        <div className="medication-info">
                          <h4>{prescription.medication}</h4>
                          <p>Prescribed by: {prescription.prescribedBy}</p>
                          <p>Date: {new Date(prescription.date).toLocaleDateString()}</p>
                        </div>
                        <div className={`prescription-status ${prescription.status.toLowerCase()}`}>
                          {prescription.status}
                        </div>
                      </div>
                      <div className="prescription-details">
                        <div className="detail-item">
                          <FaClipboardList className="detail-icon" />
                          <span><strong>Instructions:</strong> {prescription.instructions}</span>
                        </div>
                        <div className="detail-item">
                          <FaHistory className="detail-icon" />
                          <span><strong>Duration:</strong> {prescription.duration}</span>
                        </div>                        <div className="detail-item">
                          <FaPrescriptionBottle className="detail-icon" />
                          <span><strong>Refills Left:</strong> {prescription.refillsLeft}</span>
                        </div>
                      </div>
                      {prescription.status === 'Active' && prescription.refillsLeft > 0 && (
                        <button className="refill-btn">Request Refill</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div className="vitals-tab">
              <div className="vitals-section">
                <h2>Vital Signs History</h2>
                <div className="vitals-chart">
                  {vitalSigns.map((vital, index) => (
                    <div key={index} className="vital-record">
                      <div className="vital-date">{new Date(vital.date).toLocaleDateString()}</div>
                      <div className="vital-measurements">
                        <div className="vital-item">
                          <FaTint className="vital-icon blood-pressure" />
                          <span className="vital-label">Blood Pressure:</span>
                          <span className="vital-value">{vital.bloodPressure} mmHg</span>
                        </div>
                        <div className="vital-item">
                          <FaHeartbeat className="vital-icon heart-rate" />
                          <span className="vital-label">Heart Rate:</span>
                          <span className="vital-value">{vital.heartRate} bpm</span>
                        </div>
                        <div className="vital-item">
                          <FaThermometerHalf className="vital-icon temperature" />
                          <span className="vital-label">Temperature:</span>
                          <span className="vital-value">{vital.temperature}</span>
                        </div>
                        <div className="vital-item">
                          <FaWeight className="vital-icon weight" />
                          <span className="vital-label">Weight:</span>
                          <span className="vital-value">{vital.weight}</span>
                        </div>
                        <div className="vital-item">
                          <FaRuler className="vital-icon height" />
                          <span className="vital-label">BMI:</span>
                          <span className="vital-value">{vital.bmi}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
          <div className="history-section">
            <h2>Lịch Sử Khám Bệnh</h2>
            <div className="appointments-list">
              {appointmentHistory.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                  <div className="appointment-date">
                    <div className="date">{formatDate(appointment.date)}</div>
                    <div className="time">{appointment.time}</div>
                  </div>
                  
                  <div className="appointment-info">
                    <h4>{appointment.department}</h4>
                    <p>Bác sĩ: {appointment.doctor}</p>
                    <p>Chẩn đoán: {appointment.diagnosis}</p>
                  </div>
                  
                  <div className={`appointment-status ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}

          {activeTab === 'analytics' && (
            <div className="analytics-tab">
              <HealthAnalytics />
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="reports-tab">
              <MedicalReport />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
