import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { 
  FaAmbulance, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaExclamationTriangle, 
  FaHeartbeat,
  FaFirstAid,
  FaHospital,
  FaUserMd
} from 'react-icons/fa';
import './Emergency.css';

const Emergency = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');

  const emergencyContacts = [
    {
      service: 'Emergency Services',
      number: '911',
      description: 'For life-threatening emergencies',
      icon: <FaAmbulance />,
      color: '#dc3545',
      available: '24/7'
    },
    {
      service: 'Medical Center Emergency',
      number: '+1 (555) 911-HELP',
      description: 'Direct line to our emergency department',
      icon: <FaHospital />,
      color: '#007bff',
      available: '24/7'
    },
    {
      service: 'Poison Control',
      number: '1-800-222-1222',
      description: 'For poisoning emergencies',
      icon: <FaExclamationTriangle />,
      color: '#ffc107',
      available: '24/7'
    },
    {
      service: 'Crisis Hotline',
      number: '988',
      description: 'Mental health crisis support',
      icon: <FaHeartbeat />,
      color: '#28a745',
      available: '24/7'
    }
  ];

  const emergencyTypes = [
    {
      type: 'Cardiac Emergency',
      symptoms: ['Chest pain', 'Difficulty breathing', 'Irregular heartbeat', 'Fainting'],
      actions: ['Call 911 immediately', 'Give aspirin if conscious', 'Begin CPR if needed'],
      icon: <FaHeartbeat />,
      color: '#dc3545'
    },
    {
      type: 'Severe Allergic Reaction',
      symptoms: ['Difficulty breathing', 'Swelling', 'Hives', 'Nausea'],
      actions: ['Use EpiPen if available', 'Call 911', 'Remove allergen source'],
      icon: <FaExclamationTriangle />,
      color: '#ffc107'
    },
    {
      type: 'Severe Bleeding',
      symptoms: ['Heavy bleeding', 'Blood loss', 'Shock symptoms'],
      actions: ['Apply direct pressure', 'Elevate injured area', 'Call 911'],
      icon: <FaFirstAid />,
      color: '#dc3545'
    },
    {
      type: 'Stroke',
      symptoms: ['Face drooping', 'Arm weakness', 'Speech difficulties', 'Confusion'],
      actions: ['Note time of symptoms', 'Call 911 immediately', 'Keep person calm'],
      icon: <FaUserMd />,
      color: '#007bff'
    }
  ];

  const hospitalLocations = [
    {
      name: 'Main Medical Center',
      address: '123 Healthcare Blvd, Medical District',
      phone: '+1 (555) 123-4567',
      services: ['Emergency Room', 'Trauma Center', 'ICU'],
      distance: '2.3 miles',
      estimatedTime: '8 minutes'
    },
    {
      name: 'North Campus Hospital',
      address: '456 North Ave, Uptown',
      phone: '+1 (555) 234-5678',
      services: ['Emergency Room', 'Cardiac Care', 'Surgery'],
      distance: '4.1 miles',
      estimatedTime: '12 minutes'
    },
    {
      name: 'Children\'s Emergency Center',
      address: '789 Kids Way, Family District',
      phone: '+1 (555) 345-6789',
      services: ['Pediatric Emergency', 'Child Trauma', 'NICU'],
      distance: '3.8 miles',
      estimatedTime: '10 minutes'
    }
  ];

  const handleEmergencyCall = (number) => {
    // In a real app, this could open the phone dialer
    window.open(`tel:${number}`);
  };

  const handleQuickAssessment = () => {
    if (!emergencyType || !urgencyLevel) {
      alert('Please select emergency type and urgency level for assessment.');
      return;
    }
    
    // Simple assessment logic
    if (urgencyLevel === 'critical') {
      alert('CALL 911 IMMEDIATELY! This appears to be a life-threatening emergency.');
    } else if (urgencyLevel === 'urgent') {
      alert('Seek immediate medical attention. Consider calling emergency services or visiting the nearest emergency room.');
    } else {
      alert('Monitor symptoms closely. Consider contacting your healthcare provider or visiting urgent care.');
    }
  };

  return (
    <Layout>
      <div className="emergency-container">
        <div className="emergency-header">
          <FaAmbulance className="emergency-icon" />
          <h1>Emergency Services</h1>
          <p>Quick access to emergency contacts and medical assistance</p>
        </div>

        {/* Emergency Banner */}
        <div className="emergency-banner">
          <div className="banner-content">
            <FaExclamationTriangle className="warning-icon" />
            <div className="banner-text">
              <h2>In Case of Life-Threatening Emergency</h2>
              <p>Call 911 immediately or go to the nearest emergency room</p>
            </div>            <button 
              className="emergency-call-btn"
              onClick={() => handleEmergencyCall('911')}
            >
              <FaPhone /> Call 911
            </button>
          </div>
        </div>

        {/* Quick Assessment */}
        <div className="quick-assessment">
          <h2>Quick Emergency Assessment</h2>
          <p>Not sure if it's an emergency? Answer these quick questions:</p>
          
          <div className="assessment-form">
            <div className="form-group">
              <label>What type of emergency are you experiencing?</label>
              <select 
                value={emergencyType} 
                onChange={(e) => setEmergencyType(e.target.value)}
              >
                <option value="">Select emergency type</option>
                <option value="cardiac">Heart/Chest problems</option>
                <option value="breathing">Difficulty breathing</option>
                <option value="bleeding">Severe bleeding</option>
                <option value="pain">Severe pain</option>
                <option value="neurological">Stroke/Neurological</option>
                <option value="allergic">Allergic reaction</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>How urgent is the situation?</label>
              <select 
                value={urgencyLevel} 
                onChange={(e) => setUrgencyLevel(e.target.value)}
              >
                <option value="">Select urgency level</option>
                <option value="critical">Life-threatening/Critical</option>
                <option value="urgent">Very urgent/Severe</option>
                <option value="moderate">Moderate concern</option>
                <option value="mild">Mild symptoms</option>
              </select>
            </div>
            
            <button className="assessment-btn" onClick={handleQuickAssessment}>
              Get Emergency Guidance
            </button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="emergency-contacts-section">
          <h2>Emergency Contacts</h2>
          <div className="contacts-grid">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon" style={{ color: contact.color }}>
                  {contact.icon}
                </div>
                <div className="contact-info">
                  <h3>{contact.service}</h3>
                  <p className="contact-description">{contact.description}</p>
                  <div className="contact-details">
                    <span className="phone-number">{contact.number}</span>
                    <span className="availability">
                      <FaClock /> {contact.available}
                    </span>
                  </div>
                </div>
                <button 
                  className="call-btn"
                  onClick={() => handleEmergencyCall(contact.number)}
                  style={{ backgroundColor: contact.color }}
                >
                  <FaPhone /> Call Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Types Guide */}
        <div className="emergency-guide">
          <h2>Emergency Types & First Aid</h2>
          <div className="guide-grid">
            {emergencyTypes.map((emergency, index) => (
              <div key={index} className="guide-card">
                <div className="guide-header">
                  <div className="guide-icon" style={{ color: emergency.color }}>
                    {emergency.icon}
                  </div>
                  <h3>{emergency.type}</h3>
                </div>
                
                <div className="guide-content">
                  <div className="symptoms-section">
                    <h4>Symptoms:</h4>
                    <ul>
                      {emergency.symptoms.map((symptom, idx) => (
                        <li key={idx}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="actions-section">
                    <h4>Immediate Actions:</h4>
                    <ol>
                      {emergency.actions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearest Hospitals */}
        <div className="hospitals-section">
          <h2>Nearest Emergency Facilities</h2>
          <div className="hospitals-list">
            {hospitalLocations.map((hospital, index) => (
              <div key={index} className="hospital-card">
                <div className="hospital-info">
                  <h3>{hospital.name}</h3>
                  <div className="hospital-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>{hospital.distance} away • {hospital.estimatedTime} drive</span>
                    </div>
                  </div>
                  <div className="hospital-services">
                    <strong>Services: </strong>
                    {hospital.services.join(', ')}
                  </div>
                </div>
                <div className="hospital-actions">
                  <button 
                    className="call-hospital-btn"
                    onClick={() => handleEmergencyCall(hospital.phone)}
                  >
                    <FaPhone /> Call
                  </button>
                  <button className="directions-btn">
                    <FaMapMarkerAlt /> Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Preparedness Tips */}
        <div className="preparedness-tips">
          <h2>Emergency Preparedness</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Keep Emergency Numbers Handy</h4>
              <p>Save important emergency contacts in your phone and keep a written copy accessible.</p>
            </div>
            <div className="tip-card">
              <h4>First Aid Kit</h4>
              <p>Maintain a well-stocked first aid kit at home, work, and in your vehicle.</p>
            </div>
            <div className="tip-card">
              <h4>Medical Information</h4>
              <p>Keep a list of medications, allergies, and medical conditions easily accessible.</p>
            </div>
            <div className="tip-card">
              <h4>Emergency Plan</h4>
              <p>Create and practice an emergency plan with your family members.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Emergency;
