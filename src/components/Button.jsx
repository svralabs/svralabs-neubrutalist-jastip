import React from 'react';

export default function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  className = '',
  ...props
}) {
  const baseClasses = 'neubrutalist-btn rounded-full text-label-bold uppercase transition-all';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    accentPink: 'bg-accent-pink text-white',
    accentPurple: 'bg-accent-purple text-white',
    accentOrange: 'bg-accent-orange text-white',
    white: 'bg-white text-black',
    black: 'bg-black text-white',
  };
  const sizeClasses = {
    small: 'px-md py-xs text-xs font-bold',
    medium: 'px-lg py-sm',
    large: 'px-xl py-md text-xl font-extrabold',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
