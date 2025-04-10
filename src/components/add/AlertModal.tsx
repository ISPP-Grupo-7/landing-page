import React from 'react';

const AlertModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        height: 250,
        width: 400,
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 25, fontWeight: 'bold', paddingTop: 30, }}>Lo sentimos</h2>
        <p style={{ fontSize: 17, paddingTop: 20, paddingBottom: 30, }}>Tu solicitud no ha podido ser enviada.</p>
        <button onClick={onClose} style={{
          width: '40%',
          backgroundColor: '#2bbbad',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 0',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          height: '44px',
          transition: 'background-color 0.2s'
        }}>Cerrar</button>
      </div>
    </div>
  );
};

export default AlertModal;
