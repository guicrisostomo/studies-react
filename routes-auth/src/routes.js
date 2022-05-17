import React from 'react';
import {isAuthenticated} from './auth';

import { BrowserRouter as Router , Route, Routes, useLocation, Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  let location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{from: location}} replace />;
  } else {

    return children;

  }
};

const AppRouters = () => {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<h1>Public</h1>} />
        <Route exact path="/app" element={<PrivateRoute><h1>Private</h1></PrivateRoute>} />
      </Routes>
    </Router>

  )
}

export default AppRouters;