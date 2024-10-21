// Widget.js
import React from 'react';

const Widget = ({ title, children }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Widget;
