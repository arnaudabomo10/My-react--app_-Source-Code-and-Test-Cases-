// components/Layout1.js
import React from 'react';
import { Table } from 'antd';
// import LanguageSwitcher from LanguageSwitcher.js;
// Exemple de données pour le tableau
import LanguageSwitcher from './LanguageSwitcher.js';

const dataSource = [
  {
    key: '1',
    flightCode: 'AA123',
    departure: 'New York',
    arrival: 'Los Angeles',
    status: 'On Time',
  },
  {
    key: '2',
    flightCode: 'DL456',
    departure: 'Chicago',
    arrival: 'Miami',
    status: 'Delayed',
  },
  {
    key: '3',
    flightCode: 'UA789',
    departure: 'San Francisco',
    arrival: 'New York',
    status: 'Cancelled',
  },
];

// Définir les colonnes du tableau
const columns = [
  {
    title: 'Flight Code',
    dataIndex: 'flightCode',
    key: 'flightCode',
  },
  {
    title: 'Departure',
    dataIndex: 'departure',
    key: 'departure',
  },
  {
    title: 'Arrival',
    dataIndex: 'arrival',
    key: 'arrival',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const Layout1 = () => {
  return (
    <div>
      <h1>Flight Schedule</h1>
      <LanguageSwitcher/>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Layout1;
