components/FlightTable.js
import React, { useState } from 'react';
import { Table, Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

const FlightTable = () => {
  const [filteredData, setFilteredData] = useState(null);

  const dataSource = [
    {
      key: '1',
      flightNumber: 'AA123',
      departureAirport: 'JFK',
      arrivalAirport: 'LAX',
      scheduledTime: '08:00 AM',
      actualTime: '08:30 AM',
      status: 'Delayed',
    },
    {
      key: '2',
      flightNumber: 'DL456',
      departureAirport: 'LAX',
      arrivalAirport: 'ORD',
      scheduledTime: '09:00 AM',
      actualTime: '09:00 AM',
      status: 'On Time',
    },
    // Ajouter plus de données ici...
  ];

  const columns = [
    {
      title: 'Flight Number',
      dataIndex: 'flightNumber',
      key: 'flightNumber',
      sorter: (a, b) => a.flightNumber.localeCompare(b.flightNumber),
    },
    {
      title: 'Departure Airport',
      dataIndex: 'departureAirport',
      key: 'departureAirport',
      sorter: (a, b) => a.departureAirport.localeCompare(b.departureAirport),
    },
    {
      title: 'Arrival Airport',
      dataIndex: 'arrivalAirport',
      key: 'arrivalAirport',
      sorter: (a, b) => a.arrivalAirport.localeCompare(b.arrivalAirport),
    },
    {
      title: 'Scheduled Time',
      dataIndex: 'scheduledTime',
      key: 'scheduledTime',
      sorter: (a, b) => a.scheduledTime.localeCompare(b.scheduledTime),
    },
    {
      title: 'Actual Time',
      dataIndex: 'actualTime',
      key: 'actualTime',
      sorter: (a, b) => a.actualTime.localeCompare(b.actualTime),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
  ];

  const handleSearch = (value) => {
    const filtered = dataSource.filter(
      (item) =>
        item.departureAirport.toLowerCase().includes(value.toLowerCase()) ||
        item.arrivalAirport.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Search
        placeholder="Search by Airport"
        enterButton="Search"
        onSearch={handleSearch}
        style={{ marginBottom: 20 }}
      />
      <Table
        dataSource={filteredData || dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default FlightTable;
