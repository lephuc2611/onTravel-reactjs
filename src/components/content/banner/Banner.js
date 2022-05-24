import React from "react";
import Form from "./form/Form";
import CustomSlider from "./slider/Slider";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="main-banner">
      <CustomSlider />
      <Form />
    </div>
  );
}
