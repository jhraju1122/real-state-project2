import React, { useContext } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Card from './Card';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
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