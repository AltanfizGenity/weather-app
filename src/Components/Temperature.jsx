import React from 'react';

function Temperature({ temp_c, className = '' }) {
  return (
    <div className={`temperature ${className}`}>
      {temp_c}
      <span className='degree' style={{ fontSize: `75%` }}>
        &deg;
      </span>
    </div>
  );
}

export default Temperature;
