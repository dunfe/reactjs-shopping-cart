import { Form, Input, Button } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewProduct } from "../action/index";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
};

const Add = ({ addNewProduct }) => {
  const [title, setTitle] = useState("");

  const [form] = Form.useForm();

  // when user press submit
  const onFinish = values => {
    addNewProduct(values);
    onReset();
  };

  // when user press reset
  const onReset = () => {
    form.resetFields();
  };

  // init control
  const onFill = () => {
    form.setFieldsValue({
      title: "Apple",
      price: 1000
    });
  };

  return (
    <Form
      style={{ marginTop: 20 }}
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item name="title" label="Name" rules={[{ required: true }]}>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(
  null,
  { addNewProduct }
)(Add);
