import {Button, Form, Input} from "antd";

const LoginForm = () => {
    const [form] = Form.useForm();
    
    const onFinish = async () => {}
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
                <Input placeholder="用户名"/>
            </Form.Item>
            <Form.Item>
                <Input.Password placeholder="密码"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm