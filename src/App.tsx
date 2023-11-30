// App.tsx

import React from 'react';

import { Route, Routes } from 'react-router-dom';
// import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';


const App: React.FC = () => {
  return (
    <Routes>
      {/* <Switch> */}
        <Route  path="/"
        //  Component={ComponentA}
          element={<ComponentA/>}  />
        <Route  path="/componentB/:data" 
        // Component={ComponentB}
         element={<ComponentB/>} />
      {/* </Switch> */}
    </Routes>
  );
};

export default App;
