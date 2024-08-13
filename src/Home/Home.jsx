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
            <div>
        <h1 id='h1'>Apartments for Sale</h1>
        <p id='p'>The leading real estate marketplace. Search millions of for-sale and <br /> rental listings, compare home values and connect.</p>
            </div>
             <Card></Card>
           
          
            <Footer></Footer>
        </div>
    );
};

export default Home;