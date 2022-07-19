import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <React.StrictMode>
      <Header />
      <Outlet />
      <Footer />
    </React.StrictMode>
  );
}