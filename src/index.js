import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductDataProvider } from './context';
import ScrollToTop from './ScrollToTop';



ReactDOM.render(
  <React.StrictMode>
  <ProductDataProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </ProductDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

