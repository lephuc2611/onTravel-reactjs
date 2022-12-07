import React, { useState, useEffect } from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import "./Header.css";

export default function Header({ page }) {
  const [navColor, setnavColor] = useState("transparent");
  const [logoColor, setlogoColor] = useState("#fff");
  const [menuColor, setmenuColor] = useState("whiteColor");
  const [headerShadow, setheaderShadow] = useState("none");
  const [menuActive, setmenuActive] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setnavColor("#fff");
      setlogoColor("#008489");
      setmenuColor("blackColor");
      setheaderShadow("rgb(0 0 0 / 10%) 0px 0px 20px");
      setmenuActive(true);
    } else {
      if (page === "home") {
        setnavColor("transparent");
        setlogoColor("#fff");
        setmenuColor("whiteColor");
        setheaderShadow("none");
        setmenuActive(false);
      }
    }
  };
  useEffect(() => {
    if (page !== "home") {
      setnavColor("#fff");
      setlogoColor("#008489");
      setmenuColor("blackColor");
      setheaderShadow("rgb(0 0 0 / 10%) 0px 0px 20px");
      setmenuActive(true);
    }
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <header>
      <div
        className="header-wrapper"
        style={{
          backgroundColor: navColor,
          boxShadow: headerShadow,
        }}
      >
        <Logo color={logoColor} />
        <Menu colorName={menuColor} menuActive={menuActive} />
      </div>
    </header>
  );
}
