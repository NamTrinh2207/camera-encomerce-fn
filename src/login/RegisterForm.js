import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function RegisterForm(props) {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    const rainbowBackground = {
        background: 'linear-gradient(45deg, #FF5E7D, #FF8663, #FFC700, #88FF65, #36D9F5, #9966FF)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        input:'100vh'
    };

    const  inputStyle = {
            width: '100%',
            maxWidth: '400px',
    }

    return (
        <div style={rainbowBackground}>
            <Form name="register" onFinish={onFinish} scrollToFirstError>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên người dùng!',
                        },
                    ]}
                >
                    <Input style={inputStyle} prefix={<UserOutlined />} placeholder="Tên người dùng" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng xác nhận mật khẩu!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Hai mật khẩu không khớp!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Xác nhận mật khẩu" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RegisterForm;
