import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';  // Import your custom styles
import App from './components/App';  // Import the App component
import reportWebVitals from './reportWebVitals';  // Optional, for measuring performance

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
