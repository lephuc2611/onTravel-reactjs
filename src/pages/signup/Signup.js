import React from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import "../signin/Signin.css";
import Logo from "../../components/header/logo/Logo";
const Signup = () => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  return (
    <div className="main-signin">
      <div className="main-signin-content">
        <Logo color={"#008489"} />
        <h2 className="main-signin-content__title-welcome">
          Welcome To TripFinder
        </h2>
        <h3 className="main-signin-content__title-required">
          Please Register for your account
        </h3>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            {...formItemLayout}
            name={["user"]}
            label="Username"
            rules={[{ type: "text" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name={["email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            label="Password"
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            label="Confirm password"
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item {...formItemLayout}>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Row>
                <Col span={12}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>I agree with terms and conditions</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Row>
          </Form.Item>

          <Form.Item {...formItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div
          class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
          role="separator"
        >
          <span class="ant-divider-inner-text">Or Register Up With</span>
        </div>
        <div className="flex-btn">
          <div>
            <Button className="btn-login-or btn-facebook">Facebook</Button>
          </div>
          <div>
            <Button className="btn-login-or btn-github">Github</Button>
          </div>
        </div>
        <div className="flex-btn">
          <div>
            <Button className="btn-login-or btn-firebase">Firebase</Button>
          </div>
          <div>
            <Button className="btn-login-or btn-google">Google+</Button>
          </div>
        </div>

        <p class="main-signin-content__acount">
          Already Have an Account!<a href="/signup">Login</a>
        </p>
      </div>
      <div className="main-signin-bg">
        <div className="main-signin-image"></div>
      </div>
    </div>
  );
};

export default Signup;
