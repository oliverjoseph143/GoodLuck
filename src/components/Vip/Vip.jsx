import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Content from './components/Content/Content';
import Content2 from './components/Content2/Content2'; 
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgetPassword/ForgetPass';
import Vip from './components/Vip/Vip'; // ✅ Import Vip component

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-4">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Content />
                <Content2 />
                <Footer />
              </>
            }
          />

          {/* Login/Register/Forgot Password */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* VIP Page */}
          <Route path="/vip" element={<Vip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
