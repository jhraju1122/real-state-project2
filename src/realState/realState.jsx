import React from 'react';
import { Link } from 'react-router-dom';

const RealState = ({realState}) => {
    const {id, image, segment_name, price, status, area ,facilities,description, view_property,estate_title, location, } = realState;
    return (
         <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src= {image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">{estate_title}</h1>
          <h1>Id:{id}</h1>
          <h1>segment name: {segment_name} </h1>
          <h1>About property: {description}</h1>
          <h1>price: {price}</h1>
          <h1>Status: {status}</h1>
          <h1>Area: {area}</h1>
          <h1>location: {location}</h1>
          <h1>description: If a dog chews shoes whose shoes does he choose?</h1>
          <h1> facilities: {facilities}</h1>
          <h1> view property: {view_property}</h1>
          <div className="card-actions">
          <Link to="/detailsPage" className="btn btn-primary">View Property</Link>
          </div>
        </div>
      </div>
    );
};

export default RealState;


 
 