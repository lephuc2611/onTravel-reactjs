import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import "./Signin.css";
import Logo from "../../components/header/logo/Logo";
const Signin = () => {
  return (
    <div className="main-signin">
      <div className="main-signin-content">
        <Logo color={"#008489"} />
        <h2 className="main-signin-content__title-welcome">Welcome Back</h2>
        <h3 className="main-signin-content__title-required">
          Please log into your account
        </h3>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
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
          <Form.Item>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Row>
          </Form.Item>

          <Form.Item>
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
          <span class="ant-divider-inner-text">Or log in with </span>
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
          Don't Have an Account?<a href="/signup">Registration</a>
        </p>
      </div>
      <div  className="main-signin-bg">
        <div className="main-signin-image"></div>
      </div>
    </div>
  );
};

export default Signin;
