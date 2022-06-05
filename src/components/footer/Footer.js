import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../header/logo/Logo";
import "./Footer.css";
export default function Footer() {
  const [logoColor, setlogoColor] = useState("#008489");
  return (
    <footer>
      <div className="footer-icon">
        <Logo color={logoColor} />
      </div>
      <div className="footer-navbars">
        <ul className="footer-navbars-item">
          <NavLink to="/hotels" className="footer-navbars-link">
            Hotels
          </NavLink>
          <NavLink to="/listing" className="footer-navbars-link">
            Listing
          </NavLink>
          <NavLink to="/pricing" className="footer-navbars-link">
            Pricing
          </NavLink>
          <NavLink to="/hotels" className="footer-navbars-link">
            Privacy
          </NavLink>
          <NavLink to="/agent" className="footer-navbars-link">
            Agent
          </NavLink>
        </ul>
      </div>
      <div className="footer-source">Copyright @ 2022 RedQ, Inc.</div>
    </footer>
  );
}
