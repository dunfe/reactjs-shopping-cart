import {Button, Form, Input} from "antd";
import React, {useState} from "react";
import {connect} from "react-redux";
import {addNewProduct, increaseInventory} from "../../action";
import _ from "lodash"

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16}
};

const tailLayout = {
    wrapperCol: {offset: 4, span: 16}
};

const Add = ({products, addNewProduct, increaseInventory}) => {
    const [title, setTitle] = useState("");

    const [form] = Form.useForm();

    const onFinish = values => {
        const id = _.findLast(products).id + 1;
        if (!_.some(products, {"title": values.title, "price": values.price})) {
            addNewProduct({...values, id: id});
        } else {
            increaseInventory(values)
        }
        onReset();
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            title: "Apple",
            price: 1000,
            link: "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-400x460.png",
            inventory: 1
        });
    };

    return (
        <Form
            style={{marginTop: 20}}
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
        >
            <Form.Item name="title" label="Name" rules={[{required: true}]}>
                <Input value={title} onChange={e => setTitle(e.target.value)}/>
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="link" label="Image" rules={[
                {
                    type: 'url',
                    message: 'The input is not valid URL!',
                    pattern: '(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)'
                },
                {
                    required: true,
                },
            ]}>
                <Input/>
            </Form.Item>
            <Form.Item name="inventory" label="Inventory" rules={[{required: true}]}>
                <Input/>
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
    {addNewProduct, increaseInventory}
)(Add);
