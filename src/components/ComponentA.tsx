// ComponentA.tsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const ComponentA: React.FC = () => {
  const dataToSend = 'This is the data to be passed';
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/componentB', { state: { data: dataToSend } });
  };

  return (
    <div>
      <h1>Component A</h1>
      {/* Using Link */}
      <Link to={`/componentB/${encodeURIComponent(dataToSend)}`}>
        Go to Component B
      </Link>

      <div>
      <h1>Component A</h1>
      <button onClick={handleClick}>Go to Component B</button>
    </div>

    </div>
  );
};

export default ComponentA;
