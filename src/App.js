  import React from 'react';
  import Header from './components/Header/Header';
  import Content from './components/Content/Content';
  import Content2 from './components/Content2/Content2';
  import Footer from './components/Footer/Footer';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Login from './components/Login/Login';
  import Register from './components/Register/Register';
  import ForgotPassword from './components/ForgetPassword/ForgetPass';
  import Vip from './components/Vip/Vip'; // ✅ New import for VIP page
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import AboutUs from './components/AboutUs/AboutUs';
  import Faq from './components/Faq/Faq';
  import DisconnectionPolicy from './components/DisconnectionPolicy/DisconnectionPolicy';
  import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
  import Otp from './components/Otp/Otp';
  import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';


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
                </>
              }
            />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />


            {/* ✅ VIP Page Route */}
            <Route path="/vip" element={<Vip />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/disconnection" element={<DisconnectionPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

          </Routes>
        </div>

        <Footer /> {/* Displayed on all pages */}
      </Router>
    );
  }

  export default App;
