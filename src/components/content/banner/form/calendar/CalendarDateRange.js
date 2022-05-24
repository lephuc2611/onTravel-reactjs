import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./CalendarDateRange.css";

export default function CustomSlider() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    const inputs = document.querySelectorAll(".rdrDateInput>input");

    const calendarHeading =
      document.getElementsByClassName("rdrMonthsVertical")[0];
    const calendar = document.getElementsByClassName(
      "rdrMonthAndYearWrapper"
    )[0];
    Array.from(inputs).forEach((input) => {
      input.addEventListener("focus", () => {
        calendar.style.display = "flex";
        calendarHeading.style.display = "flex";
      });
    });
    document.addEventListener("click", (e) => {
      const calendarBlock = document.querySelector(".tripform--date");
      if (!calendarBlock.contains(e.target)) {
        calendar.style.display = "none";
        calendarHeading.style.display = "none";
      }
    });
  }, []);

  return (
    <React.StrictMode>
      <i className="fa-solid fa-calendar"></i>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        showMonthAndYearPickers={false}
        preventSnapRefocus={true}
        endDatePlaceholder="End Date"
        startDatePlaceholder="Start Date"
        color="#000"
      />
    </React.StrictMode>
  );
}
