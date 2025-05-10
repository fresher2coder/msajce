import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import StudentDetails from "../components/studentManagement/StudentDetails";
import StudentForm from "../components/studentManagement/StudentForm";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default MainLayout;
