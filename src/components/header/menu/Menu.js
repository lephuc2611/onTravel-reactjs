import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu(props) {
  const menuList = ["Hotels", "Listing", "Agent", "Pricing"];

  return (
    <div className="header-menu">
      <div className="header-menu__nav">
        <ul>
          {menuList.map((title, key) => {
            let path = title.toLowerCase();
            if (path === "hotels") {
              path = "/";
            }
            return (
              <li key={key}>
                <NavLink exact="/" to={path} className={props.colorName}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header-menu__account">
        <ul>
          <li>
            <NavLink
              className={"menu__account--signinBtn " + props.colorName}
              to="/signin"
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__account--signupBtn" to="/signup">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
