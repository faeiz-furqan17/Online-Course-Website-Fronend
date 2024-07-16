import React from "react";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ROUTES from "./routes/routes";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
          </Route>
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
