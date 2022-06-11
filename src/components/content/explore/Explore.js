import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Explore.css";
import Heading from "../heading/Heading";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Explore() {
  return (
    <div className="main-explore">
      <Heading href={"#"} heading={"Explore Destinations"} />
      <Carousel responsive={responsive}>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
        <div className="explore-box">
          <a>
            <img
              className="explore-box-imgage"
              src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/cairo.jpg"
            />
            <div className="explore-box-item">
              <h3 className="explore-box-item__title">Prague</h3>
              <p className="explore-box-item__hotels">55556 Hotels</p>
            </div>
          </a>
        </div>
      </Carousel>
    </div>
  );
}
