// App.tsx

import React from 'react';

import { Route, Routes } from 'react-router-dom';
// import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';
import ArrayComponent from './components/ArrayComponent';


const App: React.FC = () => {
  return (
    <Routes>
      {/* <Switch> */}
        <Route  path="/"
        //  Component={ComponentA}
          element={<ArrayComponent/>}  />
        <Route  path="/componentB/:data" 
        // Component={ComponentB}
         element={<ComponentB/>} />
      {/* </Switch> */}
    </Routes>
  );
};

export default App;
