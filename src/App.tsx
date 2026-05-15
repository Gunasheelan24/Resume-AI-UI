import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routerObject } from './app/routes/Routes';

const App: React.FC = () => {
  return (
    <RouterProvider router={routerObject} />    
  );
};

export default App;
