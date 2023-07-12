import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/forgetpassword" element={<Home />} />
          <Route path="/request" element={<Request />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
