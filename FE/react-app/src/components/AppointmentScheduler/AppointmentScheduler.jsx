import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaStethoscope } from 'react-icons/fa';
import { showSuccess, showError } from '../../utils/notifications';
import './AppointmentScheduler.css';

const AppointmentScheduler = () => {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
    patientType: 'new'
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const departments = [
    { id: 'cardiology', name: 'Tim mạch', doctors: ['BS. Nguyễn Văn A', 'BS. Trần Thị B'] },
    { id: 'dermatology', name: 'Da liễu', doctors: ['BS. Lê Văn C', 'BS. Phạm Thị D'] },
    { id: 'orthopedics', name: 'Xương khớp', doctors: ['BS. Hoàng Văn E', 'BS. Võ Thị F'] },
    { id: 'neurology', name: 'Thần kinh', doctors: ['BS. Đặng Văn G', 'BS. Bùi Thị H'] },
    { id: 'gastroenterology', name: 'Tiêu hóa', doctors: ['BS. Ngô Văn I', 'BS. Dương Thị J'] }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset dependent fields
    if (name === 'department') {
      setFormData(prev => ({
        ...prev,
        doctor: '',
        date: '',
        time: ''
      }));
      setAvailableSlots([]);
    } else if (name === 'doctor' || name === 'date') {
      setFormData(prev => ({
        ...prev,
        time: ''
      }));
      // Simulate fetching available slots
      if (formData.doctor && formData.date) {
        setAvailableSlots(timeSlots.filter(() => Math.random() > 0.3));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock appointment creation
      const appointment = {
        id: Date.now(),
        ...formData,
        status: 'confirmed',
        patientName: 'Nguyễn Văn Nam' // Should come from user context
      };

      showSuccess('Đặt lịch khám thành công! Chúng tôi sẽ liên hệ với bạn để xác nhận.');
      
      // Reset form
      setFormData({
        department: '',
        doctor: '',
        date: '',
        time: '',
        reason: '',
        patientType: 'new'
      });
      setAvailableSlots([]);
      
    } catch (error) {
      showError('Đặt lịch thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedDepartment = departments.find(dept => dept.id === formData.department);

  return (
    <div className="appointment-scheduler">
      <div className="scheduler-header">
        <h2>
          <FaCalendarAlt className="header-icon" />
          Đặt Lịch Khám Bệnh
        </h2>
        <p>Chọn thời gian và bác sĩ phù hợp cho cuộc khám của bạn</p>
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="patientType">
              <FaUser className="label-icon" />
              Loại bệnh nhân
            </label>
            <select
              id="patientType"
              name="patientType"
              value={formData.patientType}
              onChange={handleInputChange}
              required
            >
              <option value="new">Bệnh nhân mới</option>
              <option value="returning">Bệnh nhân cũ</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="department">
              <FaStethoscope className="label-icon" />
              Chuyên khoa
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
            >
              <option value="">Chọn chuyên khoa</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedDepartment && (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="doctor">
                <FaUser className="label-icon" />
                Bác sĩ
              </label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                required
              >
                <option value="">Chọn bác sĩ</option>
                {selectedDepartment.doctors.map(doctor => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">
                <FaCalendarAlt className="label-icon" />
                Ngày khám
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>
        )}

        {availableSlots.length > 0 && (
          <div className="form-group">
            <label>
              <FaClock className="label-icon" />
              Giờ khám có sẵn
            </label>
            <div className="time-slots">
              {availableSlots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  className={`time-slot ${formData.time === slot ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="reason">Lý do khám</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            placeholder="Mô tả ngắn gọn tình trạng sức khỏe hoặc lý do khám bệnh..."
            rows="4"
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading || !formData.time}
          >
            {isLoading ? 'Đang đặt lịch...' : 'Đặt Lịch Khám'}
          </button>
        </div>
      </form>

      <div className="booking-notes">
        <h3>Lưu ý quan trọng:</h3>
        <ul>
          <li>Vui lòng đến trước giờ hẹn 15 phút để làm thủ tục</li>
          <li>Mang theo CCCD/CMND và thẻ bảo hiểm y tế (nếu có)</li>
          <li>Trong trường hợp cần hủy lịch, vui lòng thông báo trước 2 giờ</li>
          <li>Phí khám: 200,000 VNĐ (chưa bao gồm chi phí xét nghiệm và thuốc)</li>
        </ul>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
