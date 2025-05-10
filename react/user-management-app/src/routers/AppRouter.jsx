import React from "react";
//BrowserRouter, Routes, Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StudentDetails from "../components/studentManagement/StudentDetails";
import StudentForm from "../components/studentManagement/StudentForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

function AppRouter() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/students" element={<StudentDetails />} />
          <Route path="/register" element={<StudentForm />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default AppRouter;
