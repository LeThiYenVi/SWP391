import React, { useState, useEffect } from 'react';
import './settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('system');
  const [settings, setSettings] = useState({
    system: {
      siteName: 'GenderCare',
      siteDescription: 'Hệ thống quản lý dịch vụ chăm sóc sức khỏe giới tính',
      adminEmail: 'admin@gendercare.com',
      supportEmail: 'support@gendercare.com',
      phoneNumber: '1900-123-456',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      timezone: 'Asia/Ho_Chi_Minh',
      language: 'vi',
      maintenanceMode: false
    },
    booking: {
      bookingSlotDuration: 60,
      maxAdvanceBookingDays: 30,
      minAdvanceBookingHours: 2,
      cancelBookingHours: 24,
      autoConfirmBooking: false,
      allowWeekendBooking: true,
      workingHours: {
        start: '08:00',
        end: '18:00'
      },
      maxBookingsPerDay: 10
    },
    payment: {
      currency: 'VND',
      taxRate: 10,
      refundPolicy: 'full',
      paymentMethods: {
        vnpay: true,
        momo: true,
        bank_transfer: true,
        cash: false
      },
      autoRefundCancellation: true,
      refundProcessingDays: 3
    },
    notification: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      bookingReminder: true,
      reminderHours: 24,
      marketingEmails: false,
      systemAlerts: true
    },
    security: {
      sessionTimeout: 30,
      passwordMinLength: 8,
      requireSpecialChars: true,
      enableTwoFactor: false,
      maxLoginAttempts: 5,
      lockoutDuration: 15,
      encryptionLevel: 'AES-256'
    }
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleNestedSettingChange = (category, parentKey, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [parentKey]: {
          ...prev[category][parentKey],
          [key]: value
        }
      }
    }));
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage('Cài đặt đã được lưu thành công!');
      setTimeout(() => setSaveMessage(''), 3000);
    }, 1000);
  };

  const renderSystemSettings = () => (
    <div className="settings-section">
      <h3>🏢 Thông tin hệ thống</h3>
      
      <div className="settings-grid">
        <div className="setting-item">
          <label>Tên website</label>
          <input
            type="text"
            value={settings.system.siteName}
            onChange={(e) => handleSettingChange('system', 'siteName', e.target.value)}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Mô tả website</label>
          <textarea
            value={settings.system.siteDescription}
            onChange={(e) => handleSettingChange('system', 'siteDescription', e.target.value)}
            className="setting-textarea"
            rows="3"
          />
        </div>

        <div className="setting-item">
          <label>Email quản trị</label>
          <input
            type="email"
            value={settings.system.adminEmail}
            onChange={(e) => handleSettingChange('system', 'adminEmail', e.target.value)}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Email hỗ trợ</label>
          <input
            type="email"
            value={settings.system.supportEmail}
            onChange={(e) => handleSettingChange('system', 'supportEmail', e.target.value)}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Số điện thoại</label>
          <input
            type="tel"
            value={settings.system.phoneNumber}
            onChange={(e) => handleSettingChange('system', 'phoneNumber', e.target.value)}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Địa chỉ</label>
          <textarea
            value={settings.system.address}
            onChange={(e) => handleSettingChange('system', 'address', e.target.value)}
            className="setting-textarea"
            rows="2"
          />
        </div>

        <div className="setting-item">
          <label>Múi giờ</label>
          <select
            value={settings.system.timezone}
            onChange={(e) => handleSettingChange('system', 'timezone', e.target.value)}
            className="setting-select"
          >
            <option value="Asia/Ho_Chi_Minh">Việt Nam (UTC+7)</option>
            <option value="Asia/Bangkok">Bangkok (UTC+7)</option>
            <option value="Asia/Jakarta">Jakarta (UTC+7)</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Ngôn ngữ</label>
          <select
            value={settings.system.language}
            onChange={(e) => handleSettingChange('system', 'language', e.target.value)}
            className="setting-select"
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div className="setting-toggle">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={settings.system.maintenanceMode}
            onChange={(e) => handleSettingChange('system', 'maintenanceMode', e.target.checked)}
            className="toggle-input"
          />
          <span className="toggle-slider"></span>
          <span className="toggle-text">Chế độ bảo trì</span>
        </label>
        <p className="setting-description">
          Khi bật, website sẽ hiển thị thông báo bảo trì cho người dùng
        </p>
      </div>
    </div>
  );

  const renderBookingSettings = () => (
    <div className="settings-section">
      <h3>📅 Cài đặt đặt lịch</h3>
      
      <div className="settings-grid">
        <div className="setting-item">
          <label>Thời gian mỗi slot (phút)</label>
          <input
            type="number"
            min="15"
            max="180"
            value={settings.booking.bookingSlotDuration}
            onChange={(e) => handleSettingChange('booking', 'bookingSlotDuration', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Đặt lịch tối đa trước (ngày)</label>
          <input
            type="number"
            min="1"
            max="90"
            value={settings.booking.maxAdvanceBookingDays}
            onChange={(e) => handleSettingChange('booking', 'maxAdvanceBookingDays', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Đặt lịch tối thiểu trước (giờ)</label>
          <input
            type="number"
            min="1"
            max="48"
            value={settings.booking.minAdvanceBookingHours}
            onChange={(e) => handleSettingChange('booking', 'minAdvanceBookingHours', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Hủy lịch trước (giờ)</label>
          <input
            type="number"
            min="1"
            max="72"
            value={settings.booking.cancelBookingHours}
            onChange={(e) => handleSettingChange('booking', 'cancelBookingHours', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Giờ làm việc - Bắt đầu</label>
          <input
            type="time"
            value={settings.booking.workingHours.start}
            onChange={(e) => handleNestedSettingChange('booking', 'workingHours', 'start', e.target.value)}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Giờ làm việc - Kết thúc</label>
          <input
            type="time"
            value={settings.booking.workingHours.end}
            onChange={(e) => handleNestedSettingChange('booking', 'workingHours', 'end', e.target.value)}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Tối đa booking/ngày</label>
          <input
            type="number"
            min="1"
            max="50"
            value={settings.booking.maxBookingsPerDay}
            onChange={(e) => handleSettingChange('booking', 'maxBookingsPerDay', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>
      </div>

      <div className="settings-toggles">
        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.booking.autoConfirmBooking}
              onChange={(e) => handleSettingChange('booking', 'autoConfirmBooking', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Tự động xác nhận booking</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.booking.allowWeekendBooking}
              onChange={(e) => handleSettingChange('booking', 'allowWeekendBooking', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Cho phép đặt lịch cuối tuần</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderPaymentSettings = () => (
    <div className="settings-section">
      <h3>💳 Cài đặt thanh toán</h3>
      
      <div className="settings-grid">
        <div className="setting-item">
          <label>Đơn vị tiền tệ</label>
          <select
            value={settings.payment.currency}
            onChange={(e) => handleSettingChange('payment', 'currency', e.target.value)}
            className="setting-select"
          >
            <option value="VND">VND - Việt Nam Đồng</option>
            <option value="USD">USD - US Dollar</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Thuế VAT (%)</label>
          <input
            type="number"
            min="0"
            max="30"
            value={settings.payment.taxRate}
            onChange={(e) => handleSettingChange('payment', 'taxRate', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Chính sách hoàn tiền</label>
          <select
            value={settings.payment.refundPolicy}
            onChange={(e) => handleSettingChange('payment', 'refundPolicy', e.target.value)}
            className="setting-select"
          >
            <option value="full">Hoàn tiền đầy đủ</option>
            <option value="partial">Hoàn tiền một phần</option>
            <option value="none">Không hoàn tiền</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Thời gian xử lý hoàn tiền (ngày)</label>
          <input
            type="number"
            min="1"
            max="30"
            value={settings.payment.refundProcessingDays}
            onChange={(e) => handleSettingChange('payment', 'refundProcessingDays', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>
      </div>

      <div className="payment-methods">
        <h4>Phương thức thanh toán</h4>
        <div className="methods-grid">
          <div className="method-item">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={settings.payment.paymentMethods.vnpay}
                onChange={(e) => handleNestedSettingChange('payment', 'paymentMethods', 'vnpay', e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">VNPay</span>
            </label>
          </div>

          <div className="method-item">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={settings.payment.paymentMethods.momo}
                onChange={(e) => handleNestedSettingChange('payment', 'paymentMethods', 'momo', e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">MoMo</span>
            </label>
          </div>

          <div className="method-item">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={settings.payment.paymentMethods.bank_transfer}
                onChange={(e) => handleNestedSettingChange('payment', 'paymentMethods', 'bank_transfer', e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">Chuyển khoản ngân hàng</span>
            </label>
          </div>

          <div className="method-item">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={settings.payment.paymentMethods.cash}
                onChange={(e) => handleNestedSettingChange('payment', 'paymentMethods', 'cash', e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">Tiền mặt</span>
            </label>
          </div>
        </div>
      </div>

      <div className="setting-toggle">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={settings.payment.autoRefundCancellation}
            onChange={(e) => handleSettingChange('payment', 'autoRefundCancellation', e.target.checked)}
            className="toggle-input"
          />
          <span className="toggle-slider"></span>
          <span className="toggle-text">Tự động hoàn tiền khi hủy</span>
        </label>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="settings-section">
      <h3>🔔 Cài đặt thông báo</h3>
      
      <div className="settings-grid">
        <div className="setting-item">
          <label>Nhắc nhở trước (giờ)</label>
          <input
            type="number"
            min="1"
            max="72"
            value={settings.notification.reminderHours}
            onChange={(e) => handleSettingChange('notification', 'reminderHours', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>
      </div>

      <div className="settings-toggles">
        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.notification.emailNotifications}
              onChange={(e) => handleSettingChange('notification', 'emailNotifications', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Thông báo Email</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.notification.smsNotifications}
              onChange={(e) => handleSettingChange('notification', 'smsNotifications', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Thông báo SMS</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.notification.pushNotifications}
              onChange={(e) => handleSettingChange('notification', 'pushNotifications', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Push Notifications</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.notification.bookingReminder}
              onChange={(e) => handleSettingChange('notification', 'bookingReminder', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Nhắc nhở lịch hẹn</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.notification.marketingEmails}
              onChange={(e) => handleSettingChange('notification', 'marketingEmails', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Email Marketing</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.notification.systemAlerts}
              onChange={(e) => handleSettingChange('notification', 'systemAlerts', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Cảnh báo hệ thống</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="settings-section">
      <h3>🔒 Cài đặt bảo mật</h3>
      
      <div className="settings-grid">
        <div className="setting-item">
          <label>Thời gian session (phút)</label>
          <input
            type="number"
            min="5"
            max="480"
            value={settings.security.sessionTimeout}
            onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Độ dài mật khẩu tối thiểu</label>
          <input
            type="number"
            min="6"
            max="20"
            value={settings.security.passwordMinLength}
            onChange={(e) => handleSettingChange('security', 'passwordMinLength', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Số lần đăng nhập sai tối đa</label>
          <input
            type="number"
            min="3"
            max="10"
            value={settings.security.maxLoginAttempts}
            onChange={(e) => handleSettingChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Thời gian khóa tài khoản (phút)</label>
          <input
            type="number"
            min="5"
            max="60"
            value={settings.security.lockoutDuration}
            onChange={(e) => handleSettingChange('security', 'lockoutDuration', parseInt(e.target.value))}
            className="setting-input"
          />
        </div>

        <div className="setting-item">
          <label>Mức độ mã hóa</label>
          <select
            value={settings.security.encryptionLevel}
            onChange={(e) => handleSettingChange('security', 'encryptionLevel', e.target.value)}
            className="setting-select"
          >
            <option value="AES-128">AES-128</option>
            <option value="AES-256">AES-256</option>
          </select>
        </div>
      </div>

      <div className="settings-toggles">
        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.security.requireSpecialChars}
              onChange={(e) => handleSettingChange('security', 'requireSpecialChars', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Yêu cầu ký tự đặc biệt trong mật khẩu</span>
          </label>
        </div>

        <div className="setting-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={settings.security.enableTwoFactor}
              onChange={(e) => handleSettingChange('security', 'enableTwoFactor', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">Xác thực hai bước (2FA)</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="settings">
      <div className="page-header">
        <h1>⚙️ Cài đặt hệ thống</h1>
        <button 
          className={`btn btn-primary ${isSaving ? 'loading' : ''}`}
          onClick={handleSaveSettings}
          disabled={isSaving}
        >
          <span className="btn-icon">{isSaving ? '⏳' : '💾'}</span>
          {isSaving ? 'Đang lưu...' : 'Lưu cài đặt'}
        </button>
      </div>

      {saveMessage && (
        <div className="save-message success">
          ✅ {saveMessage}
        </div>
      )}

      <div className="settings-tabs">
        <button 
          className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => setActiveTab('system')}
        >
          🏢 Hệ thống
        </button>
        <button 
          className={`tab-btn ${activeTab === 'booking' ? 'active' : ''}`}
          onClick={() => setActiveTab('booking')}
        >
          📅 Đặt lịch
        </button>
        <button 
          className={`tab-btn ${activeTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          💳 Thanh toán
        </button>
        <button 
          className={`tab-btn ${activeTab === 'notification' ? 'active' : ''}`}
          onClick={() => setActiveTab('notification')}
        >
          🔔 Thông báo
        </button>
        <button 
          className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          🔒 Bảo mật
        </button>
      </div>

      <div className="settings-container">
        {activeTab === 'system' && renderSystemSettings()}
        {activeTab === 'booking' && renderBookingSettings()}
        {activeTab === 'payment' && renderPaymentSettings()}
        {activeTab === 'notification' && renderNotificationSettings()}
        {activeTab === 'security' && renderSecuritySettings()}
      </div>
    </div>
  );
};

export default Settings;
