import React from 'react';
import {  useLocation } from 'react-router-dom';
// Define a type for the received data         useParams,
type ReceivedDataType = {
  data: string;
};

const ComponentB: React.FC = () => {

    const location = useLocation();

    const receivedData = (location.state as ReceivedDataType | undefined )?.data;
    
    console.log(receivedData)
  // const { data } = useParams<{ data?: string }>();

  return (
    <div>
      <h1>Component B</h1>
      {/* <p>Data received: {data ? decodeURIComponent(data) : 'No data available'}</p> */}
      <p>Data received: {receivedData ? decodeURIComponent(receivedData) : 'No data available'}</p>
    </div>
  );
};

export default ComponentB;
