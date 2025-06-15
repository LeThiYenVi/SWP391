import React, { useState, useEffect } from 'react';
import { 
  FaChartLine, 
  FaHeart, 
  FaWeight, 
  FaThermometerHalf,
  FaArrowUp,
  FaArrowDown,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle
} from 'react-icons/fa';
import './HealthAnalytics.css';

const HealthAnalytics = ({ vitalSigns, medicalHistory, testResults }) => {
  const [timeRange, setTimeRange] = useState('6months');
  const [insights, setInsights] = useState([]);
  const [healthScore, setHealthScore] = useState(0);

  useEffect(() => {
    generateHealthInsights();
    calculateHealthScore();
  }, [vitalSigns, timeRange]);

  const generateHealthInsights = () => {
    const recentData = getFilteredData();
    const newInsights = [];

    // Blood Pressure Analysis
    const bpTrend = analyzeBPTrend(recentData);
    if (bpTrend.trend !== 'stable') {
      newInsights.push({
        type: bpTrend.trend === 'increasing' ? 'warning' : 'positive',
        title: 'Blood Pressure Trend',
        message: bpTrend.message,
        icon: <FaHeart />,
        recommendation: bpTrend.recommendation
      });
    }

    // Weight Analysis
    const weightTrend = analyzeWeightTrend(recentData);
    if (weightTrend.significant) {
      newInsights.push({
        type: weightTrend.type,
        title: 'Weight Changes',
        message: weightTrend.message,
        icon: <FaWeight />,
        recommendation: weightTrend.recommendation
      });
    }

    // Health Patterns
    const patterns = identifyHealthPatterns(recentData);
    patterns.forEach(pattern => newInsights.push(pattern));

    // Upcoming Health Reminders
    const reminders = generateHealthReminders();
    reminders.forEach(reminder => newInsights.push(reminder));

    setInsights(newInsights);
  };

  const getFilteredData = () => {
    const now = new Date();
    let cutoffDate;

    switch (timeRange) {
      case '1month':
        cutoffDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case '3months':
        cutoffDate = new Date(now.setMonth(now.getMonth() - 3));
        break;
      case '6months':
        cutoffDate = new Date(now.setMonth(now.getMonth() - 6));
        break;
      case '1year':
        cutoffDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        cutoffDate = new Date(now.setMonth(now.getMonth() - 6));
    }

    return vitalSigns?.filter(vital => new Date(vital.date) >= cutoffDate) || [];
  };

  const analyzeBPTrend = (data) => {
    if (data.length < 3) return { trend: 'stable', message: '', recommendation: '' };

    const bpReadings = data.map(vital => {
      const [systolic, diastolic] = vital.bloodPressure.split('/').map(Number);
      return { systolic, diastolic, date: vital.date };
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

    const recent = bpReadings.slice(-3);
    const avgSystolic = recent.reduce((sum, reading) => sum + reading.systolic, 0) / recent.length;
    const avgDiastolic = recent.reduce((sum, reading) => sum + reading.diastolic, 0) / recent.length;

    const firstHalf = recent.slice(0, Math.ceil(recent.length / 2));
    const secondHalf = recent.slice(Math.floor(recent.length / 2));

    const firstAvgSystolic = firstHalf.reduce((sum, r) => sum + r.systolic, 0) / firstHalf.length;
    const secondAvgSystolic = secondHalf.reduce((sum, r) => sum + r.systolic, 0) / secondHalf.length;

    const trend = secondAvgSystolic - firstAvgSystolic;

    if (Math.abs(trend) < 5) {
      return { trend: 'stable', message: '', recommendation: '' };
    }

    if (trend > 0) {
      return {
        trend: 'increasing',
        message: `Your blood pressure has increased by an average of ${Math.round(trend)} points over recent readings.`,
        recommendation: 'Consider discussing this trend with your healthcare provider and review your diet and exercise routine.'
      };
    } else {
      return {
        trend: 'decreasing',
        message: `Your blood pressure has decreased by an average of ${Math.round(Math.abs(trend))} points over recent readings.`,
        recommendation: 'Great job! Continue your current health routine and lifestyle choices.'
      };
    }
  };

  const analyzeWeightTrend = (data) => {
    if (data.length < 3) return { significant: false };

    const weights = data.map(vital => ({
      weight: parseFloat(vital.weight),
      date: vital.date
    })).sort((a, b) => new Date(a.date) - new Date(b.date));

    const firstWeight = weights[0].weight;
    const lastWeight = weights[weights.length - 1].weight;
    const change = lastWeight - firstWeight;
    const percentChange = (change / firstWeight) * 100;

    if (Math.abs(percentChange) < 2) {
      return { significant: false };
    }

    const type = Math.abs(percentChange) > 5 ? 'warning' : 'info';

    return {
      significant: true,
      type,
      message: `Your weight has ${change > 0 ? 'increased' : 'decreased'} by ${Math.abs(change).toFixed(1)} lbs (${Math.abs(percentChange).toFixed(1)}%) over the selected period.`,
      recommendation: type === 'warning' 
        ? 'Significant weight changes should be discussed with your healthcare provider.'
        : 'Monitor your weight regularly and maintain healthy lifestyle habits.'
    };
  };

  const identifyHealthPatterns = (data) => {
    const patterns = [];

    // Check for consistent vital sign measurements
    if (data.length >= 5) {
      const regularMeasurements = data.every((vital, index, arr) => {
        if (index === 0) return true;
        const daysDiff = Math.abs(new Date(vital.date) - new Date(arr[index - 1].date)) / (1000 * 60 * 60 * 24);
        return daysDiff <= 14; // Within 2 weeks of each other
      });

      if (regularMeasurements) {
        patterns.push({
          type: 'positive',
          title: 'Consistent Health Monitoring',
          message: 'You\'ve been consistently tracking your vital signs. This helps identify trends early.',
          icon: <FaCheckCircle />,
          recommendation: 'Keep up the excellent health monitoring routine!'
        });
      }
    }

    return patterns;
  };

  const generateHealthReminders = () => {
    const reminders = [];
    const now = new Date();

    // Remind about regular checkups based on medical history
    const lastCheckup = medicalHistory?.find(record => 
      record.condition.toLowerCase().includes('physical') || 
      record.condition.toLowerCase().includes('checkup')
    );

    if (lastCheckup) {
      const checkupDate = new Date(lastCheckup.date);
      const monthsSince = (now - checkupDate) / (1000 * 60 * 60 * 24 * 30);

      if (monthsSince >= 11) {
        reminders.push({
          type: 'warning',
          title: 'Annual Checkup Due',
          message: 'It\'s been almost a year since your last physical examination.',
          icon: <FaCalendarAlt />,
          recommendation: 'Schedule your annual physical examination with your primary care physician.'
        });
      }
    }

    return reminders;
  };

  const calculateHealthScore = () => {
    let score = 75; // Base score

    const recentData = getFilteredData();
    if (recentData.length === 0) {
      setHealthScore(score);
      return;
    }

    // Recent vital signs tracking (positive points)
    if (recentData.length >= 3) score += 10;

    // Blood pressure analysis
    const latestVitals = recentData[recentData.length - 1];
    if (latestVitals?.bloodPressure) {
      const [systolic, diastolic] = latestVitals.bloodPressure.split('/').map(Number);
      if (systolic <= 130 && diastolic <= 80) score += 10;
      else if (systolic <= 140 && diastolic <= 90) score += 5;
      else score -= 10;
    }

    // Heart rate analysis
    if (latestVitals?.heartRate) {
      const hr = parseInt(latestVitals.heartRate);
      if (hr >= 60 && hr <= 100) score += 5;
      else score -= 5;
    }

    // BMI analysis
    if (latestVitals?.bmi) {
      const bmi = parseFloat(latestVitals.bmi);
      if (bmi >= 18.5 && bmi <= 24.9) score += 10;
      else if (bmi >= 25 && bmi <= 29.9) score += 5;
      else score -= 5;
    }

    // Ensure score is within 0-100 range
    score = Math.max(0, Math.min(100, score));
    setHealthScore(score);
  };

  const getHealthScoreColor = (score) => {
    if (score >= 80) return '#28a745';
    if (score >= 60) return '#ffc107';
    return '#dc3545';
  };

  const getHealthScoreLabel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Attention';
  };

  return (
    <div className="health-analytics">
      <div className="analytics-header">
        <h2><FaChartLine /> Health Analytics & Insights</h2>
        <div className="time-range-selector">
          <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="health-score-section">
        <div className="health-score-card">
          <div className="score-circle">
            <div 
              className="score-progress" 
              style={{ 
                background: `conic-gradient(${getHealthScoreColor(healthScore)} ${healthScore * 3.6}deg, #e8ecef 0deg)` 
              }}
            >
              <div className="score-inner">
                <span className="score-number">{healthScore}</span>
                <span className="score-label">{getHealthScoreLabel(healthScore)}</span>
              </div>
            </div>
          </div>
          <div className="score-info">
            <h3>Overall Health Score</h3>
            <p>Based on your recent vital signs, medical history, and health tracking consistency.</p>
          </div>
        </div>
      </div>

      <div className="insights-section">
        <h3>Personalized Health Insights</h3>
        {insights.length > 0 ? (
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className={`insight-card ${insight.type}`}>
                <div className="insight-header">
                  <div className="insight-icon">{insight.icon}</div>
                  <h4>{insight.title}</h4>
                </div>
                <p className="insight-message">{insight.message}</p>
                {insight.recommendation && (
                  <div className="insight-recommendation">
                    <strong>Recommendation:</strong> {insight.recommendation}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-insights">
            <FaInfoCircle />
            <p>Keep tracking your health data to receive personalized insights and recommendations.</p>
          </div>
        )}
      </div>

      <div className="trends-section">
        <h3>Health Trends</h3>
        <div className="trends-grid">
          <div className="trend-card">
            <div className="trend-header">              <FaHeart className="trend-icon bp" />
              <h4>Blood Pressure</h4>
              <FaArrowUp className="trend-direction positive" />
            </div>
            <div className="trend-data">
              <span className="trend-value">120/80</span>
              <span className="trend-label">Latest Reading</span>
            </div>
          </div>

          <div className="trend-card">            <div className="trend-header">
              <FaWeight className="trend-icon weight" />
              <h4>Weight</h4>
              <FaArrowDown className="trend-direction stable" />
            </div>
            <div className="trend-data">
              <span className="trend-value">175 lbs</span>
              <span className="trend-label">Current Weight</span>
            </div>
          </div>

          <div className="trend-card">            <div className="trend-header">
              <FaHeart className="trend-icon hr" />
              <h4>Heart Rate</h4>
              <FaArrowUp className="trend-direction positive" />
            </div>
            <div className="trend-data">
              <span className="trend-value">72 bpm</span>
              <span className="trend-label">Resting HR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalytics;
