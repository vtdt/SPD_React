import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const NoDOM = document.getElementById('root');
const root = ReactDOM.createRoot(NoDOM);
root.render(<App />);