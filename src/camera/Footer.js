import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#F1F0EC'}} className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html"><img src="img/img.png" alt=""/></a>
                            </div>
                            <ul>
                                <li>Địa chỉ: Minh Khai, Từ Liêm, Hà Nội</li>
                                <li>Điện thoại: +84 369 324 197</li>
                                <li>Email: trinhnam180697@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Chính sách &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                Hỗ trợ khách hàng</h6>
                            <ul>
                                <li><a href="#">Chính sách bảo mật</a></li>
                                <li><a href="#">Giao nhận & Vận chuyển</a></li>
                                <li><a href="#">Chính sách đổi trả</a></li>
                                <li><a href="#">Chính sách bảo hành</a></li>
                                <li><a href="#">Chính sách hoàn tiền</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Hướng dẫn mua hàng</a></li>
                                <li><a href="#">Hình thức thanh toán</a></li>
                                <li><a href="#">Điều khoản dịch vụ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <p>Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</p>
                            <form action="#">
                                <input type="text" placeholder="Thả email nhận ngay ưu đãi"/>
                                    <button type="submit" className="site-btn">Đăng Ký</button>
                            </form>
                            <p>Kết nối với chúng tôi</p>
                            <div className="footer__widget__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                <p>
                                    Bản quyền &copy;
                                    <script>document.write(new Date().getFullYear()); </script>
                                     thuộc về CameraMen | Cung cấp bởi CameraMen <i className="fa fa-heart"
                                                                                        aria-hidden="true"></i>

                                </p>
                            </div>
                            <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
