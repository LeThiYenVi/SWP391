import React from 'react';

const TestComponent = () => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🏥 GenderCare Admin Interface</h1>
      <p>React is working correctly!</p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/admin/dashboard" 
          style={{
            padding: '1rem 2rem',
            background: 'white',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            margin: '0 1rem'
          }}
        >
          Go to Dashboard
        </a>
        <a 
          href="/login" 
          style={{
            padding: '1rem 2rem',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            margin: '0 1rem'
          }}
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default TestComponent;
