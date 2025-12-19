import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";

// Lazy imports
const Login = lazy(() => import("../pages/auth/Login"));

const Registration = lazy(() => import("../pages/modules/registration/Registration"));


const PublicRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          {/* LAYOUT WRAPPER */}
          <Route element={<DashboardLayout />}>
              {/* PAGES INSIDE DASHBOARD */}
              {/* Registration Module */}
              <Route path="/registration" element={<Registration/>}/>
          </Route>
           </Route>
      </Routes>
    </Suspense>
      );
};

export default PublicRoute;