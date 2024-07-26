import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import AdminPage from './pages/Admin';
import LoginPage from './pages/LoginPage';
import AddProduct from './pages/Product';
function App() {
  return (
    <div>
    
        <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        </Routes>
      </div>
  );
}

export default App;
