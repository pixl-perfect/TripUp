import React from 'react';
import { createRoot } from 'react-dom/client';
import './design/react-global.js';
import './design/bundle.js';
import './maps/AppleMap.jsx';
import './design/tokens.css';
import './design/bundle.css';
import './app.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
