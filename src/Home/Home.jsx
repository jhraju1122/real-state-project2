import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Card from './Card';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Home;