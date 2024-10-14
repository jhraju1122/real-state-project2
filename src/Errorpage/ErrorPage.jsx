import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-[30%]'>
               <h2>Oops!! SORRY  Raju mama!</h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;