import React from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";
import {useAuth} from "./AuthProvider";
import Swal from "sweetalert2";
import AuthenticatedRequest from "../request/AuthenticatedRequest";

function ChangePassword(props) {
    const {user, token} = useAuth();
    let idUser;
    if (user != null) {
        idUser = user.id;
    }
    console.log(idUser)
    const onFinish = (values) => {
        AuthenticatedRequest(
            `http://localhost:8080/api/change-password/${idUser}`,
            "POST",
            {...values},
            token)
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    text: response.data.message,
                    showConfirmButton: false,
                    timer: 1000
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "đã xảy ra sự cố",
                    text: error.response.data.message
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
                <h4><strong>THAY ĐỔI MẬT KHẨU</strong></h4> <br/>
                Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
            </div>
            <br/>
            <div style={rainbowBackground}>
                <Form name="register" onFinish={onFinish} scrollToFirstError>
                    <Form.Item
                        name="oldPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                            {
                                min: 8,
                                message: 'Mật khẩu phải có ít nhất 8 ký tự!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password style={inputStyle} prefix={<LockOutlined />} placeholder="Mật khẩu hiện tại" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu mới !',
                            },
                            {
                                min: 8,
                                message: 'Mật khẩu phải có ít nhất 8 ký tự!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password style={inputStyle} prefix={<LockOutlined/>} placeholder="Mật khẩu mới"/>
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu mới!',
                            },
                            {
                                min: 8,
                                message: 'Mật khẩu phải có ít nhất 8 ký tự!',
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
                        <Input.Password style={inputStyle} prefix={<LockOutlined/>}
                                        placeholder="Xác nhận mật khẩu mới"/>
                    </Form.Item>

                    <Form.Item>
                        <Button style={{backgroundColor: '#7FAD39', width: 500, height: 46, maxWidth: '100vh',fontSize:15}}
                                type="primary" htmlType="submit">
                            ĐẶT LẠI MẬT KHẨU
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <br/>
        </div>
    );
}

export default ChangePassword;