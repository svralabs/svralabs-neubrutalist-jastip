import React from 'react';

export default function Badge({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-label-bold uppercase';
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
    large: 'px-xl py-md text-xl',
  };

  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}
