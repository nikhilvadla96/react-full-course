import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { EmployeeContextProvider } from './UseContext/Context/EmployeeContext.js';
import { MainContextProvider } from './UseContext/Context/MainContext.js';
import { UserContextObjProvider } from './UseContext/Context/UserContextObj.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextObjProvider>
  <MainContextProvider>
  <EmployeeContextProvider>
    <App />
    </EmployeeContextProvider>
    </MainContextProvider>
    </UserContextObjProvider>
);
