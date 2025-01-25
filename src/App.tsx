import { Routes, Route } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";
import { Calendar } from "./pages/Calendar";
import React from "react";

export const App = () => {
  return (
    <Routes>
      {/* Public routes without sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes with sidebar layout */}

      <Route path="/home" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/calendar" element={<Calendar />} />

      {/* Catch-all route for authenticated users */}
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
