import React from "react";
import "./Heading.css";

export default function Heading(props) {
  return (
    <div className="explore-heading">
      <h2>{props.heading}</h2>
      <a href={props.href}>Show all</a>
    </div>
  );
}
