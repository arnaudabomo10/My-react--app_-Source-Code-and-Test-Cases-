// components/Date.js
import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const DateComponent = ({ onDateChange }) => {
  const [date, setDate] = useState(moment()); // État pour stocker la date

  const handleChange = (date) => {
    setDate(date); // Met à jour l'état avec la date sélectionnée
    if (onDateChange) {
      onDateChange(date); // Appelle la fonction de rappel pour informer le Layout
    }
  };

  return (
    <DatePicker value={date} onChange={handleChange} />
  );
};

export default DateComponent;
