import React from 'react';
import { Link } from 'react-router-dom';

const realState = ({ realState }) => {
     const { image, estate_title, id, segment_name, description, price, status, area, location, facilities, view_property } = realState;


    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{realState.estate_title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link>View Property</Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default realState;