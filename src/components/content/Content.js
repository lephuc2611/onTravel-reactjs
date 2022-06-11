import React from "react";
import Banner from "./banner/Banner";
import Explore from "./explore/Explore";
import "./Content.css";
import ProductsHome from "./ProductsHome/ProductsHome";

export default function Content() {
  return (
    <main>
      <Banner />
      <Explore />
      <ProductsHome heading={"Travelers’ Choice: Top hotels"} />
      <ProductsHome heading={"Best Rated: Luxary hotels"} />
    </main>
  );
}
