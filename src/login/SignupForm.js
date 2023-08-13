import React from 'react';
import {Button, Form, Input} from 'antd';
import {
    UserOutlined,
    LockOutlined,
    PhoneOutlined,
    MailOutlined
} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
function SignupForm(props) {

    const navigate = useNavigate();

    const onFinish = (values) => {
        const data = { ...values, roles: ['ROLE_USER'] };
        registerUser(data)
    };
    const registerUser = (data) => {
        axios.post("http://localhost:8080/api/signup", data)
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    text:response.data.message,
                    showConfirmButton:false,
                    timer:1000
                })
                setTimeout(() =>{
                    navigate("/signing")
                },1000)
            }).catch((error) => {
                Swal.fire({
                    icon:"error",
                    title: "đã xảy ra sự cố",
                    text:error.response.data.message
                })
        })
    }

    //CSS
    const rainbowBackground = {
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        input: '500px',
    };

    const inputStyle = {
        width: 500,
        height: 40,
        maxWidth: '100vh',
    }

    return (
        <div className={"content"}>
            <div className={"text-lg-center"}>
                <h4><strong>ĐĂNG KÝ TÀI KHOẢN</strong></h4> <br/>
                <h6>Bạn đã có tài khoản ? Đăng nhập <Link style={{color:'#7FAD39'}} to={"/signing"}>tại đây</Link></h6>
            </div>
            <br/>
            <div style={rainbowBackground}>
                <Form name="register" onFinish={onFinish} scrollToFirstError>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ tên!',
                            },
                        ]}
                    >
                        <Input style={inputStyle} prefix={<UserOutlined/>} placeholder="Nhập họ tên"/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại!',
                            },
                        ]}
                    >
                        <Input style={inputStyle} prefix={<PhoneOutlined/>} placeholder="Số điện thoại"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập email!',
                            },
                        ]}
                    >
                        <Input style={inputStyle} prefix={<MailOutlined/>} placeholder="Email"/>
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
                        <Input.Password style={inputStyle} prefix={<LockOutlined/>} placeholder="Xác nhận mật khẩu"/>
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ backgroundColor: '#7FAD39', width: 500,height: 46, maxWidth: '100vh',}}
                                type="primary" htmlType="submit">
                            ĐĂNG KÝ
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <br/>
        </div>

    );
}

export default SignupForm;
