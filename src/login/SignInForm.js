import React from 'react';
import {Button, Form, Input} from 'antd';
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {useAuth} from "./AuthProvider";

function SignInForm(props) {
    const navigate = useNavigate();
    const {updateUserAndToken } = useAuth();
    const onFinish = (values) => {
        axios.post("http://localhost:8080/api/login", {
            username: values.username,
            password: values.password
        })
            .then((response) => {
                const token = response.data.token
                const user = response.data
                try {
                    updateUserAndToken(user,token)
                    console.log(user.roles.authority)
                    navigate("/")
                } catch (error) {
                    console.error("Token verification error:", error);
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "đã xảy ra sự cố",
                    text: "Sai tài khoản hoặc mật khẩu"
                })
            })
    };

    // CSS
    const rainbowBackground = {
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        input: '100vh',
    };
    const inputStyle = {
        width: 500,
        height: 40,
        maxWidth: '100vh',
    }

    return (
        <div>
            <div className={"text-lg-center content"}>
                <h4><strong>ĐĂNG NHẬP TÀI KHOẢN</strong></h4> <br/>
                <h6>Bạn chưa có tài khoản ? Đăng ký <Link style={{color: '#7FAD39'}} to={"/signup"}>tại đây</Link></h6>
            </div>
            <div style={rainbowBackground}>
                <Form name="login" onFinish={onFinish} scrollToFirstError>
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
                    <p>Quên mật khẩu ? Nhấn <Link style={{color: '#7FAD39'}} to={"/forgotPassword"}>vào đây</Link></p>
                    <Form.Item>
                        <Button style={{backgroundColor: '#7FAD39', width: 500, height: 46, maxWidth: '100vh',fontSize:15}}
                                type="primary" htmlType="submit">
                            ĐĂNG NHẬP
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
}

export default SignInForm;
