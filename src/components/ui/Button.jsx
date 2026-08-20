import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, className = '', ...props }) => {
  const baseClasses = 'neubrutalist-btn rounded-full font-label-bold uppercase transition-all';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    accentPink: 'bg-accent-pink text-white',
    accentPurple: 'bg-accent-purple text-white',
    accentOrange: 'bg-accent-orange text-white',
  };
  const sizeClasses = {
    small: 'px-md py-xs text-xs',
    medium: 'px-lg py-sm text-label-bold',
    large: 'px-xl py-md text-xl font-extrabold',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
