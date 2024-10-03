// components/Date.js
import React from 'react';

const DateComponent = () => {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <div>
      <p>Date du jour : {currentDate}</p>
    </div>
  );
};

export default DateComponent;
