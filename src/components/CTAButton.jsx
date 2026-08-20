import React from 'react';

export default function CTAButton({ children, onClick, className = '' }) {
  return (
    <button
      className={`bg-white text-primary px-5 py-2.5 rounded-full font-label-pill clay-card active:scale-95 transition-transform ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
