import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = true; // replace later with real auth
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;