import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
      <Content />
      <Footer />
      </div>
    </div>
  );
}
export default App;


