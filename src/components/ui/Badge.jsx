import React from 'react';

const Badge = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-block px-md py-xs rounded-full text-xs font-label-bold uppercase';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    accentPink: 'bg-accent-pink text-white',
    accentPurple: 'bg-accent-purple text-white',
    accentOrange: 'bg-accent-orange text-white',
  };

  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
