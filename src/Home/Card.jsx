import { data } from "autoprefixer";
import { key } from "localforage";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
 

const Card = () => {
    
  const [realStates, setRealStates] = useState([]) 
  
  useEffect(() =>{
    fetch("realState.json")
    .then(res => res.json())
    .then(data =>{
      setRealStates(data);
    })
       }, [])

    return (
      
      <div className="main-container">
       <h2>product:{realStates.length}</h2>
      <div className='grid grid-cols-3 mt-16'>
            {
              realStates.map( (realState =><realState key={realState.id} realState={realState}></realState>) )
            }


          <div className="card bg-base-100 w-96 shadow-xl">
            
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">asas</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Property</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Property</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
};

export default Card;