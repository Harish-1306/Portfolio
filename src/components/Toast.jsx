import React from 'react';

export default function Toast({ toasts }) {
  return (
    <div className="toast-container" id="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <i className="fa-solid fa-circle-check"></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
