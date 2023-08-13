import React from 'react';
import Loading from "./Loading";
import Navbar from "./Navbar";
import Header from "./Header";
import SlideShow from "./SlideShow";
import Product from "./Product";
import ProductSection from "./ProductSection";
import Blog from "./Blog";
import Footer from "./Footer";

function HomePage(props) {
    return (
        <div>
            <Loading/>
            <Navbar/>
            <Header/>
            <SlideShow/>
            <Product/>
            <ProductSection/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default HomePage;