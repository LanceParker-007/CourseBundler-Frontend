import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import CoursePage from './components/CoursePage/CoursePage';
const App = () => {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
