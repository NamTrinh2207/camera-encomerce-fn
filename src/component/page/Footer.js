import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">ĐỊA CHỈ</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Minh Khai-Từ Liêm-Hà Nội
                            </p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+84 369 324 197</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>trinhnam180697@gmail.com</p>
                            <p className="mb-2">Kết nối với chúng tôi</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="https://www.facebook.com/nam702064/"><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="https://www.youtube.com/"><i
                                    className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">TỔNG ĐÀI HỖ TRỢ</h5>
                            <p>Mua hàng:
                                1800.0047</p>
                            <p>Bảo hành:
                                1900.2133
                            </p>
                            <p>Khiếu nại:
                                094.217.0000
                            </p>
                            <p>Phản hồi dv:
                                0982.682.104
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">HỖ TRỢ KHÁCH HÀNG</h5>
                            <a className="btn btn-link" href="">Mua hàng và thanh toán Online</a>
                            <a className="btn btn-link" href="">Chính sách bảo hành</a>
                            <a className="btn btn-link" href="">Chính sách đổi trả</a>
                            <a className="btn btn-link" href="">Cam kết mua hàng online</a>
                            <a className="btn btn-link" href="">Chính sách vận chuyển, lắp đặt</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">VỀ CAMERAMEN</h5>
                            <a className="btn btn-link" href="">Giới thiệu</a>
                            <a className="btn btn-link" href="">Ngân hàng</a>
                            <a className="btn btn-link" href="">Chính sách thanh toán</a>
                            <a className="btn btn-link" href="">Chính sách bảo mật</a>
                            <a className="btn btn-link" href="">Chất lượng dịch vụ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
