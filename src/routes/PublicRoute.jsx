import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";

// Lazy imports
const Login = lazy(() => import("../pages/auth/Login"));

const Registration = lazy(() => import("../pages/modules/registration/Registration"));
const Online = lazy(() => import("../pages/modules/online/Online"));
const Accounts = lazy(() => import("../pages/modules/accounts/Accounts"));
const Administrotor = lazy(() => import("../pages/modules/administrator/Administrator"));
const Reports = lazy(() => import("../pages/modules/reports/Reports"));
const RiskManagement = lazy(() => import("../pages/modules/risk_management/RiskManagement"));
const Symbols = lazy(() => import("../pages/modules/symbols/Symbols"));


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
              <Route path="/online" element={<Online/>}/>
              <Route path="/accounts" element={<Accounts/>}/>
              <Route path="/administrator" element={<Administrotor/>}/>
              <Route path="/reports" element={<Reports/>}/>
              <Route path="/risk_management" element={<RiskManagement/>}/>
              <Route path="/symbols" element={<Symbols/>}/>
              
          </Route>
           </Route>
      </Routes>
    </Suspense>
      );
};

export default PublicRoute;