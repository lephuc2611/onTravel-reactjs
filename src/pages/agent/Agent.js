import React from "react";
import { Tabs, Col, Row } from "antd";
const { TabPane } = Tabs;
import "./Agent.css";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Products from "../../components/content/products/Products";

export default function Agent() {
  return (
    <div className="main-agent">
      <div className="content-agent-top">
        <div className="banner-agent">
          <img
            className="banner-agent-img"
            src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/coverpic2.png"
          />
          <img
            className="banner-agent-avatar"
            src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/profilepic.png"
          />
        </div>
        <Row
          className="banner-agent-infomation"
          style={{ justifyContent: "end" }}
        >
          <Col span={16} className="banner-agent-infomation__desc">
            <h3 className="banner-agent-infomation__name">Ngo Van Nam</h3>
            <span className="banner-agent-infomation__description">
              Hello! I'm glad to share with you all the listings that i've
              created. Enjoy! And please let me know if you like it with 'Say
              Thanks' from or include my creadits when you will use it. Peace
              and Love ^__^
            </span>
          </Col>
          <Col span={8} className="banner-agent-infomation__social">
            <Row className="banner-agent-infomation__social-list">
              <Col className="banner-agent-infomation__social-item">
                <a href="https://www.facebook.com/">
                  <TwitterOutlined />
                </a>
              </Col>
              <Col className="banner-agent-infomation__social-item">
                <a href="https://www.facebook.com/">
                  <FacebookFilled />
                </a>
              </Col>
              <Col className="banner-agent-infomation__social-item">
                <a href="https://www.facebook.com/">
                  <InstagramOutlined />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="agent-tabs">
        <Tabs defaultActiveKey="listing">
          <TabPane tab="Listing" key="listing">
            <Products />
          </TabPane>
          <TabPane tab="Favourite" key="favourite">
            <Products />
          </TabPane>
          <TabPane tab="Contact" key="contact">
           
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
