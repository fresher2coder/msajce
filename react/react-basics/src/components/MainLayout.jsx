import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import MainContent from "../layouts/MainContent";
import LeftSideBar from "../layouts/LeftSideBar";
import RightSideBar from "../layouts/RightSideBar";

function MainLayout() {
  return (
    <>
      <Header />

      <section className="mainBody">
        <LeftSideBar />
        <MainContent />
        <RightSideBar />
      </section>

      <Footer />
    </>
  );
}

export default MainLayout;
