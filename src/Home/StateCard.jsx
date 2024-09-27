import React from 'react';

const StateCard = () => {
    return (
       <section className='grid grid-cols-3 container mx-auto gap-10'>
         <div>
           <div className="card  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/xF3g9jg/blog-img-1.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <h1>Id:</h1>
    <h1>segment_name</h1>
    <p>description: If a dog chews shoes whose shoes does he choose?</p>
    <h1>price:</h1>
    <h1>Status:</h1>
    <h1>Area:</h1>
    <h1>location:</h1>
    <h1> facilities => in an array => [ “living room”, “swimming pool”,
     “Kitchen”]
     </h1>
    
    <div className="card-actions">
      <button className="btn btn-primary">View Property</button>
    </div>
  </div>
</div>
        </div>

        <div>
           <div className="card   shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/xF3g9jg/blog-img-1.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>

        <div>
           <div className="card   shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/xF3g9jg/blog-img-1.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>

        
       </section>
    );
};

export default StateCard;