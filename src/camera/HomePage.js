import React from 'react';
import Header from "./Header";
import SlideShow from "./SlideShow";
import Product from "./Product";
import ProductSection from "./ProductSection";
import Blog from "./Blog";

function HomePage(props) {
    return (
        <div>
            <Header/>
            <SlideShow/>
            <Product/>
            <ProductSection/>
            <Blog/>
        </div>
    );
}

export default HomePage;