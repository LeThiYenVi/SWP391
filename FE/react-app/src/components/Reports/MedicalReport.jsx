import React, { useState } from 'react';
import { 
  FaFileDownload, 
  FaPrint, 
  FaCalendarAlt, 
  FaUser,
  FaHeart,
  FaPrescriptionBottle,
  FaClipboardList,
  FaFlask
} from 'react-icons/fa';
import './MedicalReport.css';

const MedicalReport = ({ patientData, onClose }) => {
  const [reportType, setReportType] = useState('comprehensive');
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  const generateReport = () => {
    // Implementation for report generation
    const reportData = {
      patient: patientData.userInfo,
      reportType,
      dateRange,
      generatedAt: new Date().toISOString(),
      data: getFilteredData()
    };

    // In a real app, this would call an API to generate PDF
    console.log('Generating report:', reportData);
    
    // Simulate PDF download
    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medical-report-${patientData.userInfo.fullName}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFilteredData = () => {
    const { startDate, endDate } = dateRange;
    const start = startDate ? new Date(startDate) : new Date('1900-01-01');
    const end = endDate ? new Date(endDate) : new Date();

    const filterByDate = (items) => {
      return items.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= start && itemDate <= end;
      });
    };

    let data = {};

    if (reportType === 'comprehensive' || reportType === 'medical-history') {
      data.medicalHistory = filterByDate(patientData.medicalHistory || []);
    }

    if (reportType === 'comprehensive' || reportType === 'test-results') {
      data.testResults = filterByDate(patientData.testResults || []);
    }

    if (reportType === 'comprehensive' || reportType === 'prescriptions') {
      data.prescriptions = filterByDate(patientData.prescriptions || []);
    }

    if (reportType === 'comprehensive' || reportType === 'vitals') {
      data.vitalSigns = filterByDate(patientData.vitalSigns || []);
    }

    if (reportType === 'comprehensive' || reportType === 'appointments') {
      data.appointmentHistory = filterByDate(patientData.appointmentHistory || []);
    }

    return data;
  };

  const printReport = () => {
    window.print();
  };

  return (
    <div className="medical-report-modal">
      <div className="report-container">
        <div className="report-header">
          <h2><FaFileDownload /> Generate Medical Report</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="report-config">
          <div className="config-section">
            <h3>Report Type</h3>
            <div className="report-types">
              <label className="report-type-option">
                <input
                  type="radio"
                  value="comprehensive"
                  checked={reportType === 'comprehensive'}
                  onChange={(e) => setReportType(e.target.value)}
                />
                <div className="option-content">
                  <FaClipboardList className="option-icon" />
                  <div>
                    <strong>Comprehensive Report</strong>
                    <p>All medical records, test results, prescriptions, and vital signs</p>
                  </div>
                </div>
              </label>

              <label className="report-type-option">
                <input
                  type="radio"
                  value="medical-history"
                  checked={reportType === 'medical-history'}
                  onChange={(e) => setReportType(e.target.value)}
                />
                <div className="option-content">
                  <FaHeart className="option-icon" />
                  <div>
                    <strong>Medical History Only</strong>
                    <p>Past diagnoses, treatments, and medical conditions</p>
                  </div>
                </div>
              </label>

              <label className="report-type-option">
                <input
                  type="radio"
                  value="test-results"
                  checked={reportType === 'test-results'}
                  onChange={(e) => setReportType(e.target.value)}
                />
                <div className="option-content">
                  <FaFlask className="option-icon" />
                  <div>
                    <strong>Laboratory Results</strong>
                    <p>Blood tests, X-rays, and other diagnostic results</p>
                  </div>
                </div>
              </label>

              <label className="report-type-option">
                <input
                  type="radio"
                  value="prescriptions"
                  checked={reportType === 'prescriptions'}
                  onChange={(e) => setReportType(e.target.value)}
                />                <div className="option-content">
                  <FaPrescriptionBottle className="option-icon" />
                  <div>
                    <strong>Prescription History</strong>
                    <p>Current and past medications with dosages</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="config-section">
            <h3>Date Range</h3>
            <div className="date-inputs">
              <div className="date-input-group">
                <label>From:</label>
                <input
                  type="date"
                  value={dateRange.startDate}
                  onChange={(e) => setDateRange(prev => ({
                    ...prev,
                    startDate: e.target.value
                  }))}
                />
              </div>
              <div className="date-input-group">
                <label>To:</label>
                <input
                  type="date"
                  value={dateRange.endDate}
                  onChange={(e) => setDateRange(prev => ({
                    ...prev,
                    endDate: e.target.value
                  }))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="report-preview">
          <h3>Report Preview</h3>
          <div className="preview-content">
            <div className="preview-header">
              <h4>Medical Report - {patientData.userInfo?.fullName}</h4>
              <p>Patient ID: {patientData.userInfo?.email}</p>
              <p>Generated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="preview-sections">
              {Object.entries(getFilteredData()).map(([section, data]) => (
                <div key={section} className="preview-section">
                  <h5>{section.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                  <p>{Array.isArray(data) ? `${data.length} records` : 'No data'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="report-actions">
          <button className="action-btn download-btn" onClick={generateReport}>
            <FaFileDownload /> Download PDF
          </button>
          <button className="action-btn print-btn" onClick={printReport}>
            <FaPrint /> Print Report
          </button>
          <button className="action-btn cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
