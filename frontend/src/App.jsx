import React from "react";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ROUTES from "./routes/routes";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import CourseAdd from "./pages/Course Add/CourseAdd";
import Search from "./pages/Search/Search";
import PreferenceAdd from "./pages/Preference Add/PrefrenceAdd";
import Homepage from "./pages/Homepage/Homepage";
import Courses from "./pages/Courses/Courses";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Layout />}>
          <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
            <Route path={ROUTES.COURSE_ADD} element={<CourseAdd />} />
            <Route path={ROUTES.PREFERENCE_ADD} element={<PreferenceAdd />} />
          </Route>
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.COURSES} element={<Courses />} />
        </Route>

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
