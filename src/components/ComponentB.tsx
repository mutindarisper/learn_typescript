import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ComponentB: React.FC = () => {
    const location = useLocation();
    const receivedData = location.state?.data;
  const { data } = useParams<{ data?: string }>();

  return (
    <div>
      <h1>Component B</h1>
      <p>Data received: {data ? decodeURIComponent(data) : 'No data available'}</p>
      <p>Data received: {receivedData ? decodeURIComponent(receivedData) : 'No data available'}</p>
    </div>
  );
};

export default ComponentB;
