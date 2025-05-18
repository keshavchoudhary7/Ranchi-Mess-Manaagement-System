// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  const isAuthenticated = token ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
