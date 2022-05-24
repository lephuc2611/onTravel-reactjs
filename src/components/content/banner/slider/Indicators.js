import { useEffect, useState } from "react";
import React from "react";

export default function Indicators(props) {
  const gotoIndex = function (index) {
    props.slideRef.current.slickGoTo(index);
  };

  const [curIndex, setcurIndex] = useState(props.curIndex);

  useEffect(() => {
    setcurIndex(props.curIndex);
  }, [props.curIndex]);

  const clickHandler = (index) => {
    gotoIndex(index);
    setcurIndex(index);
  };

  return (
    <div className="slider-idicators">
      {props.slideImages.map((image, index) => {
        let idicActive = index === curIndex ? "slider-idicators__active" : "";
        return (
          <button
            key={index}
            onClick={() => clickHandler(index)}
            className={idicActive}
          ></button>
        );
      })}
    </div>
  );
}
