import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const RegisterPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('注册表单数据:', values);
    };

    return (
        <div className="register-container">
            <Card title="用户注册" className="register-card">
                <Form
                    name="register"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default RegisterPage;