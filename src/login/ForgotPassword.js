import React from 'react';
import {Button, Form, Input} from 'antd';
import {
    MailOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom";

function ForgotPassword(props) {

    const onFinish = (values) => {
        console.log('login success', values);
    };
    // CSS
    const rainbowBackground = {
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        input: '100vh',
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
                <br/>
                <h5><strong>ĐẶT LẠI MẬT KHẨU</strong></h5>
                <br/>
                <h6>Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.</h6>
            </div>
            <div style={rainbowBackground}>
                <Form name="forgotPassword" onFinish={onFinish} scrollToFirstError>
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
                    <Form.Item>
                        <Button style={{ backgroundColor: '#7FAD39', width: 500,height: 46, maxWidth: '100vh',}}
                                type="primary" htmlType="submit">
                            ĐĂNG NHẬP
                        </Button>
                    </Form.Item>
                    <h6 className={"text-lg-center"}><Link style={{color:'#7FAD39'}} to={"/signing"}>Quay lại đăng nhập</Link></h6>
                </Form>
            </div>
        </div>

    );
}

export default ForgotPassword;
