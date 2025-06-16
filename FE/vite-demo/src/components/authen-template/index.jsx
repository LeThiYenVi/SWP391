import React from "react";
import "./index.css";

function AuthenTemplate({ children, pageTitle }) {
  return (
    <div className="authen-template">
      <div className="authen-layout">
        <div className="authen-left">
          <div className="authen-brand">
            <div className="authen-logo">
              <span className="logo-icon">🏥</span>
              <span>Gynexa</span>
            </div>
          </div>
          <div className="authen-image">
            <div className="doctor-illustration">
              <div className="doctor-group">
                <div className="doctor doctor-1">
                  <div className="doctor-avatar">👨‍⚕️</div>
                  <div className="doctor-mask"></div>
                </div>
                <div className="doctor doctor-2">
                  <div className="doctor-avatar">👩‍⚕️</div>
                  <div className="doctor-mask"></div>
                </div>
                <div className="doctor doctor-3">
                  <div className="doctor-avatar">👩‍⚕️</div>
                  <div className="doctor-mask"></div>
                </div>
              </div>
              <div className="medical-tools">
                <div className="stethoscope">🩺</div>
                <div className="clipboard">📋</div>
              </div>
            </div>
          </div>
        </div>
        <div className="authen-right">
          <div className="authen-card">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthenTemplate;
