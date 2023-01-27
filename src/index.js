import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto } from './components/NombreCompleto';
import { Mascota } from './components/mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NombreCompleto name="Alex" age= {29} show={true} />
    <NombreCompleto name="ale" age= "30" show={false} />
    <NombreCompleto name="alexito" age= {31} show={false} />
  </React.StrictMode>
);
