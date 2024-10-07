import React from 'react';

const AboutUs = () => {
    return (
        <div>
           <p>You have already an account? please 
            <Link to="/about">
            <button type='submit' className="btn btn-link">Login</button>
            </Link>
             </p>
        </div>
    );
};

export default AboutUs;