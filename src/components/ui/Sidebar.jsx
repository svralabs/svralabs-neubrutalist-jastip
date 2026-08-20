import React from 'react';

const Sidebar = ({ children, className = '', ...props }) => {
  const baseClasses = 'fixed left-0 top-0 h-full w-64 bg-surface border-r-2 border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] p-lg';

  return (
    <aside className={`${baseClasses} ${className}`} {...props}>
      {children}
    </aside>
  );
};

export default Sidebar;
