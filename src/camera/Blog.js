import React from 'react';

function Blog(props) {
    return (
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>KINH NGHIỆM HAY - MẸO VẶT</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="img/blog/blog-1.jpg" alt=""/>
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                    <li><i className="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">HƯỚNG DẪN CÀI ĐẶT CAMERA C6N, H6c</a></h5>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                    quaerat </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="img/blog/blog-2.jpg" alt=""/>
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                    <li><i className="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">HƯỚNG DẪN SỬ DỤNG TÍNH NĂNG THÔNG BÁO BÁO ĐỘNG</a></h5>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                    quaerat </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="img/blog/blog-3.jpg" alt=""/>
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                    <li><i className="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">Visit the clean farm in the US</a></h5>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                    quaerat </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;