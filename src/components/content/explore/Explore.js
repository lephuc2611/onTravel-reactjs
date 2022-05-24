import React from "react";
import jsonExplore from "../../../assets/data/explore.json";
import Heading from "../heading/Heading";
import "./Explore.css";

export default function Explore() {
  return (
    <div className="main-explore">
       <Heading href={'#'} heading={"Explore Destinations"} />
      <div className="explore-carousel">{JSON.stringify(jsonExplore)}</div>
    </div>
  );
}
