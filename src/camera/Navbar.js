import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div style={{backgroundColor:'#F1F0EC'}} className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> trinhnam180697@gmail.com</li>
                                        <li>Free Ship đối với tất cả đơn hàng trên 1 triệu</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img style={{width:45, height:25}} src="img/language.png" alt=""/>
                                            <div>Vietnam</div>
                                            <span className="arrow_carrot-down"></span>
                                            <ul>
                                                <li><a href="#">Vietnam</a></li>
                                                <li><a href="#">English</a></li>
                                            </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <Link to={"/signup"}><i className="fa fa-user"></i> Đăng nhập</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src="" alt="logo"/></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to={"/"} >Trang chủ</Link></li>
                                    <li><a href="#">Giới thiệu
                                    </a></li>
                                    <li><a href="#">
                                        Blog</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;