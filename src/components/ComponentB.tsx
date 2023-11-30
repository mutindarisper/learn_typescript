import React from 'react';
import { useParams } from 'react-router-dom';

const ComponentB: React.FC = () => {
  const { data } = useParams<{ data?: string }>();

  return (
    <div>
      <h1>Component B</h1>
      <p>Data received: {data ? decodeURIComponent(data) : 'No data available'}</p>
    </div>
  );
};

export default ComponentB;
