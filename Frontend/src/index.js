import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { AuthProvider, CategoryProvider, DateProvider, FilterProvider, HotelProvider, WishlistProvider } from './Context';
import { AlertProvider } from './Context/alert-context';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AlertProvider>
    <HotelProvider>
    <WishlistProvider>
      <AuthProvider>
      <FilterProvider>
      <DateProvider>
      <CategoryProvider>
    <App />
    </CategoryProvider>
      </DateProvider>
      </FilterProvider>
      </AuthProvider>
      </WishlistProvider>
      </HotelProvider>
      </AlertProvider>
    </Router>
      
  </React.StrictMode>
);


