import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// React Version 17* render way
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// , document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
