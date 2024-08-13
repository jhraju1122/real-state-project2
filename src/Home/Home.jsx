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
            <div className='grid col-span-3'>
            <Card></Card>
            </div>
          
            <Footer></Footer>
        </div>
    );
};

export default Home;