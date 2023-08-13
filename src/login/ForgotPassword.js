import React from 'react';
import {Button, Form, Input} from 'antd';
import {
    MailOutlined,
} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import withReactContent from 'sweetalert2-react-content';
import Swal from "sweetalert2";
import axios from "axios";
const MySwal = withReactContent(Swal);

function ForgotPassword(props) {
    const navigate = useNavigate();
    const onFinish = (values) => {
        MySwal.fire({
            title: 'Đang gửi email lấy lại mật khẩu',
            html: 'Vui lòng chờ trong giây lát...',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
                MySwal.showLoading();
            }
        })
        axios.post('http://localhost:8080/api/forgot-password', {email: values.email})
            .then(response => {
                Swal.fire({
                    title: '<strong>Thành công</strong>',
                    icon: 'success',
                    html: `${response.data.message}`,
                    showCloseButton: false,
                    showCancelButton: false,
                    focusConfirm: false,
                })
                navigate("/signing")
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Đã xảy ra sự cố !',
                    text: `${error.response.data.message}`,
                })
            });
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
        height: 40,
        maxWidth: '100vh',
    }

    return (
        <div>
            <div className={"text-lg-center content"}>
                <h4><strong>ĐĂNG NHẬP TÀI KHOẢN</strong></h4> <br/>
                <h6>Bạn chưa có tài khoản ? Đăng ký <Link style={{color: '#7FAD39'}} to={"/signup"}>tại đây</Link></h6>
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
                        <Button style={{backgroundColor: '#7FAD39', width: 500, height: 46, maxWidth: '100vh',}}
                                type="primary" htmlType="submit">
                            GỬI YÊU CẦU ĐẶT LẠI MẬT KHẨU
                        </Button>
                    </Form.Item>
                    <h6 className={"text-lg-center"}><Link style={{color: '#7FAD39'}} to={"/signing"}>Quay lại đăng
                        nhập</Link></h6>
                </Form>
            </div>
        </div>

    );
}

export default ForgotPassword;
