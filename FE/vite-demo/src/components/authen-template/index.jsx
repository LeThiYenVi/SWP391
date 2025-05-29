import React from 'react'
import "./index.css"

function AuthenTemplate({ children, pageTitle }) {
  return (
    <div className="authen-template no-scroll-x">
      <div className="authen-page-title">{pageTitle}</div>
      <div className="authen-layout">
        <div className="authen-left">
          <div className="authen-brand">
            <div className="authen-logo">
              <span className="logo-icon">🏥</span>
              <span>GenderCare</span>
            </div>
            <div className="authen-subtitle">
              Phần mềm quản lý dịch vụ chăm sóc sức khỏe giới tính
            </div>
          </div>
          <div className="authen-image">
            <div className="medical-illustration">
              <div className="medical-icons">
                <span>🩺</span>
                <span>💊</span>
                <span>⚕️</span>
                <span>🧬</span>
              </div>
            </div>
          </div>
          <div className="authen-features">
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Bảo mật thông tin tuyệt đối</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Quản lý hiệu quả</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💙</span>
              <span>Chăm sóc tận tâm</span>
            </div>
          </div>
        </div>
        <div className="authen-right">
          <div className="authen-card w-full max-w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthenTemplate