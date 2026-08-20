import React from 'react';

export default function Input({
  type = 'text',
  placeholder = '',
  disabled = false,
  className = '',
  icon,
  ...props
}) {
  const baseClasses = 'w-full bg-white border-2 border-black rounded-lg font-body-md focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all';
  const inputClasses = `${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <div className="relative">
      {icon && (
        <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-black">
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    </div>
  );
}
