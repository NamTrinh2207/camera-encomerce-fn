import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ImageCarousel = () => {
    const options = {
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
    };

    return (
        <section className="categories">
            <div className="container">
                <div className="section-title">
                    <h2>SẢN PHẨM BÁN CHẠY</h2>
                </div>
                <div className="row">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item">
                            <div className="categories__item set-bg" style={{backgroundImage:'url(img/categories/cat-1.jpg)'}}>
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories__item set-bg" style={{backgroundImage:'url(img/categories/cat-2.jpg)'}}>
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories__item set-bg" style={{backgroundImage:'url(img/categories/cat-3.jpg)'}}>
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories__item set-bg" style={{backgroundImage:'url(img/categories/cat-4.jpg)'}}>
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories__item set-bg" style={{backgroundImage:'url(img/categories/cat-5.jpg)'}}>
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;
