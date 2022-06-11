import React from "react";
import "./ProductsHome.css";
import Heading from "../heading/Heading";
import Products from "../products/Products";

const ProductsHome = ({ heading }) => {
  return (
    <div className="main-top-hotel">
      <Heading href={"#"} heading={heading} />
      <Products />
    </div>
  );
};

export default ProductsHome;
