import React from 'react';

const Input = ({ type = 'text', placeholder = '', icon, className = '', ...props }) => {
  const baseClasses = 'w-full bg-white border-2 border-black rounded-lg font-body-md focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';

  return (
    <div className={`relative ${className}`}>
      {icon && (
        <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-black">
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`${baseClasses} ${icon ? 'pl-xl pr-md py-sm' : 'px-md py-sm'}`}
        {...props}
      />
    </div>
  );
};

export default Input;
