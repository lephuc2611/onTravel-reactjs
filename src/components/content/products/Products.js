import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import { EyeFilled, StarFilled, StarOutlined } from "@ant-design/icons";
import "./Products.css";
const Products = ({ loadMore }) => {
  return (
    <div className="content-products">
      <Row span={24} gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="content-products-item">
            <div className="content-products-item-img">
              <Carousel autoplay>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
                <div>
                  <img
                    className="content-products-item__image"
                    src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2_thumb.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="content-products-item-content">
              <p className="content-products-item-content__address">
                21752 Kraig Pike
              </p>
              <a className="content-products-item-content__title">
                Small Metal Shirt
              </a>
              <p className="content-products-item-content__money">
                $410.00/Night - Free Cancellation
              </p>
              <p className="content-products-item-content__review">
                <span className="content-products-item-content__review_start">
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarFilled style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                  <StarOutlined style={{ color: "rgb(0, 132, 137)" }} />
                </span>
                <span className="content-products-item-content__review_name">
                  Bad (11)
                </span>
              </p>
              <a className="content-products-item-content__view-details">
                <EyeFilled style={{ color: "rgb(0, 132, 137)" }} /> View Details
              </a>
            </div>
          </div>
        </Col>
      </Row>
      {loadMore && (
        <div className="btn-loadMore">
          <Button type="primary" size={"large"}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
