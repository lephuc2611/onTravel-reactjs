import React from "react";
import CalendarsDateRange from "./calendar/CalendarDateRange";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Form.css";
import SearchInput from "./searchInput/SearchInput";
import RoomInput from "./roomInput/RoomInput";

export default function Form() {
  return (
    <div className="main-banner__tripform">
      <h2 className="tripform--heading">Latest reviews. Lowest prices.</h2>
      <p className="tripform--headingtext">
        compares prices from 200+ booking sites to help you find the lowest
        price on the right hotel for you.
      </p>
      <div className="tripform--search">
        <div className="tripform--search__item tripform--searchbox">
          <SearchInput />
        </div>
        <div className="tripform--search__item tripform--date">
          <CalendarsDateRange />
        </div>
        <div className="tripform--search__item tripform--room">
          <RoomInput />
        </div>
        <button className="tripform--btn">Find Hotels</button>
      </div>
    </div>
  );
}
