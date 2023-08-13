import React from 'react';
import {Button, Form, Input} from 'antd';
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom";

function signInForm(props) {
    const onFinish = (values) => {
        console.log('login success', values);
    };

    const rainbowBackground = {
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        input: '500px',
    };

    const inputStyle = {
        width: 500,
        height: 46,
        maxWidth: '100vh',
    }

    return (
        <div>
            <div className={"text-lg-center"}>
                <h4><strong>ĐĂNG NHẬP TÀI KHOẢN</strong></h4> <br/>
                <h6>Bạn chưa có tài khoản ? Đăng ký <Link style={{color:'#7FAD39'}} to={"/signup"}>tại đây</Link></h6>
            </div>
            <div style={rainbowBackground}>
                <Form name="register" onFinish={onFinish} scrollToFirstError>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên tài khoản!',
                            },
                        ]}
                    >
                        <Input style={inputStyle} prefix={<UserOutlined/>} placeholder="Tên người dùng"/>
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
                        <Input.Password style={inputStyle} prefix={<LockOutlined/>} placeholder="Mật khẩu"/>
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ backgroundColor: '#7FAD39', width: 500,height: 46, maxWidth: '100vh',}}
                                type="primary" htmlType="submit">
                            ĐĂNG NHẬP
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
}

export default signInForm;
