import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register'; // Fixed typo (Resgister → Register)

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
                <Footer />
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
