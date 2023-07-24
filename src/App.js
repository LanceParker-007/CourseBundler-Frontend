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
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/userAction';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader/Loader';

const App = () => {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  //loadUser dispatch
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header isAuthenticated={isAuthenticated} user={user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CoursePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request" element={<Request />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Profile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/changepassword"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/updateprofile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UpdateProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} />
              <Route
                path="/subscribe"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Subscribe />
                  </ProtectedRoute>
                }
              />
              <Route path="/paymentsuccess" element={<PaymentSuccess />} />
              <Route path="/paymentfail" element={<PaymentFail />} />
              <Route path="*" element={<NotFound />} />

              {/* Admin Routes */}
              <Route
                path="admin/dashboard"
                element={
                  <ProtectedRoute
                    adminRoute={true} //only admin is allowed to access this route
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === 'admin'} //to check if the user is admin or not, if not admin autmatic bydefault redirect to /profile, tochange this you can change routeamd
                  >
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/courses"
                element={
                  <ProtectedRoute
                    adminRoute={true} //only admin is allowed to access this route
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === 'admin'} //to check if the user is admin or not, if not admin autmatic bydefault redirect to /profile, tochange this you can change routeamd
                  >
                    <AdminCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/createcourse"
                element={
                  <ProtectedRoute
                    adminRoute={true} //only admin is allowed to access this route
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === 'admin'} //to check if the user is admin or not, if not admin autmatic bydefault redirect to /profile, tochange this you can change routeamd
                  >
                    <CreateCourse />
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/users"
                element={
                  <ProtectedRoute
                    adminRoute={true} //only admin is allowed to access this route
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === 'admin'} //to check if the user is admin or not, if not admin autmatic bydefault redirect to /profile, tochange this you can change routeamd
                  >
                    <Users />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
            <Toaster />
          </>
        )}
      </Router>
    </>
  );
};

export default App;
