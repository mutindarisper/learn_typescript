// ComponentA.tsx

import React from 'react';
import { Link } from 'react-router-dom'

const ComponentA: React.FC = () => {
  const dataToSend = 'This is the data to be passed';

  return (
    <div>
      <h1>Component A</h1>
      {/* Using Link */}
      <Link to={`/componentB/${encodeURIComponent(dataToSend)}`}>
        Go to Component B
      </Link>
    </div>
  );
};

export default ComponentA;
