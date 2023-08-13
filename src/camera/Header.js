import React from 'react';

function Header(props) {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>DANH MỤC</span>
                                </div>
                                <ul>
                                    <li><a href="#">Camera trong nhà</a></li>
                                    <li><a href="#">Camera ngoài trời</a></li>
                                    <li><a href="#">Camera pin sạc</a></li>
                                    <li><a href="#">Phụ kiện Camera</a></li>
                                    <li><a href="#">Khóa và chuông cửa</a></li>
                                    <li><a href="#">Thiết bị nhà thông minh</a></li>
                                    <li><a href="#">Cảnh báo và cảm biến</a></li>
                                    <li><a href="#">Hệ thống chuông cửa</a></li>
                                    <li><a href="#">Đầu ghi KTS</a></li>
                                    <li><a href="#">Thiết bị mạng</a></li>
                                    <li><a href="#">Camera hành trình</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div style={{marginBottom:17}} className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="Bạn cần tìm gì?"/>
                                            <button type="submit" className="site-btn">TÌM KIẾM</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+84 369 324 197</h5>
                                        <span> Hỗ trợ 24/7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item set-bg" style={{backgroundImage:'url(img/camera/camera.webp)'}}>
                                {/*<div className="hero__text">*/}
                                {/*    <span>CB8</span>*/}
                                {/*    <h2>CAMERA WIFI</h2>*/}
                                {/*    <p>HD PRO 3K</p>*/}
                                {/*    <a href="#" className="primary-btn">MUA NGAY</a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;