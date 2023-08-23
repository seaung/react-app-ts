import {Button, Form, Input} from 'antd'
const RegisterForm = () => {
    const [form] = Form.useForm();
    const onFinish = async () => {};
    const onFinishFailed = async () => {}
    return (
        <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
            autoComplete="off">
            <Form.Item>
                <Input placeholder="用户名" />
            </Form.Item>
            <Form.Item>
                <Input placeholder="邮箱地址" />
            </Form.Item>
            <Form.Item>
                <Input.Password placeholder="密码"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">立即注册</Button>
            </Form.Item>
        </Form>
    );
}

export default RegisterForm;