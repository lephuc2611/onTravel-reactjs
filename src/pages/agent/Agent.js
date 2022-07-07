import React from 'react';
import { Tabs, Col, Row, Form, Icon, Input, Button, Checkbox } from 'antd';
const { TabPane } = Tabs;
import './Agent.css';
import { FacebookFilled, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import Products from '../../components/content/products/Products';

export default function Agent(props) {
  return (
    <div className='main-agent'>
      <div className='content-agent-top'>
        <div className='banner-agent'>
          <img
            className='banner-agent-img'
            // src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/coverpic2.png"
          />
          <img
            className='banner-agent-avatar'
            src='http://s3.amazonaws.com/redqteam.com/tripfinder-images/profilepic.png'
          />
        </div>
        <Row className='banner-agent-infomation' style={{ justifyContent: 'end' }}>
          <Col span={16} className='banner-agent-infomation__desc'>
            <h3 className='banner-agent-infomation__name'>Ngo Van Nam</h3>
            <span className='banner-agent-infomation__description'>
              Hello! I'm glad to share with you all the listings that i've created. Enjoy! And please let me know if you
              like it with 'Say Thanks' from or include my creadits when you will use it. Peace and Love ^__^
            </span>
          </Col>
          <Col span={8} className='banner-agent-infomation__social'>
            <Row className='banner-agent-infomation__social-list'>
              <Col className='banner-agent-infomation__social-item'>
                <a href='https://www.facebook.com/'>
                  <TwitterOutlined />
                </a>
              </Col>
              <Col className='banner-agent-infomation__social-item'>
                <a href='https://www.facebook.com/'>
                  <FacebookFilled />
                </a>
              </Col>
              <Col className='banner-agent-infomation__social-item'>
                <a href='https://www.facebook.com/'>
                  <InstagramOutlined />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className='agent-tabs'>
        <Tabs defaultActiveKey='listing'>
          <TabPane tab='Listing' key='listing'>
            <Products />
          </TabPane>
          <TabPane tab='Favourite' key='favourite'>
            <Products />
          </TabPane>
          <TabPane tab='Contact' key='contact'>
            <Row gutter={32}>
              <Col span={16}>
                <h3 className='contact-title'>Send Message</h3>
                <Form name='basic' layout={'vertical'}>
                  <Form.Item
                    label='Your message'
                    name='message'
                    rules={[
                      {
                        message: 'Please input your message!',
                      },
                    ]}
                  >
                    <Input.TextArea showCount rows={6} maxLength={200} />
                  </Form.Item>

                  <Row gutter={32}>
                    <Col span={12}>
                      <Form.Item name={['user', 'email']} label='Your email' rules={[{ type: 'email' }]}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name={['user', 'email']} label='Your contact number' rules={[{ type: 'phone' }]}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item name='remember' valuePropName='checked'>
                    <Checkbox>Save my email in the browser fro the next time I contact</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='ant-btn ant-btn-primary ant-btn-lg contact-btn-submit'
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={8} className='contact-info-box'>
                <Row>
                  <h4 className='contact-info'>Phone No</h4>
                  <p className='contact-sub-info'>825-362-3175</p>
                </Row>
                <Row>
                  <h4 className='contact-info'>Email</h4>
                  <p className='contact-sub-info'>Elliot.Hagenes35@gmail.com</p>
                </Row>
                <Row>
                  <h4 className='contact-info'>Address</h4>
                  <p className='contact-sub-info'>959 Jerde Prairie</p>
                </Row>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
