import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Modal,
  Checkbox,
  Row,
  Col,
} from "antd";
import "./Listing.css";

import Products from "../../components/content/products/Products";

const { Option } = Select;
const { RangePicker } = DatePicker;
export default function Listing() {
  const [activeModal, setActiveModal] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="main-listing">
      <div className="nav-filter">
        <Form
          form={form}
          layout="inline"
          name="control-hooks"
          onFinish={onFinish}
        >
          <div className="btn-filter">
            <Button type="primary" onClick={() => setModal1Visible(true)}>
              Amenities
            </Button>
            <Modal
              // style={{
              //   top: 20,
              // }}
              className="modal-filter"
              visible={modal1Visible}
              onOk={() => setModal1Visible(false)}
              footer={null}
              onCancel={() => setModal1Visible(false)}
            >
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                // onChange={onChange}
              >
                <Row>
                  <Col span={24}>
                    <Checkbox value="A">A</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="B">B</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="C">C</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="D">D</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="E">E</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Modal>
          </div>
          <RangePicker />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ padding: "106px 25px 0" }}>
        <Products loadMore={true} />
      </div>
    </div>
  );
}
