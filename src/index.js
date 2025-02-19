import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './context/Context';


// Create the root instance
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <ContextProvider>
    <App/>
  </ContextProvider>
);