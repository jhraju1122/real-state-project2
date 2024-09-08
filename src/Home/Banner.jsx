import React from 'react';

const Banner = () => {
    return (
         <div>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/pz1KvTJ/10-04-21-The-6-Types-of-Commercial-Real-Estate-Property-new.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60 "></div>
    <div className='items-center max-w-md justify-center text-center grid lg:grid-cols-2 gap-[530px]'>
         <div id='banner-card' > 
         <h1 className='text-5xl font-semibold text-white h-[400px] '><span className=''>Welcome to Our <br /> Property World</span> <hr />
          <p className='text-[14px] my-10'>Read Our Six Step Golden to making your <br /> carbon reduction Strategy Reality</p>
          <p className='text-[14px] my-10'>Trusted By Many Clients: </p>
          </h1> 
         </div>
        
        {/* form  */}
        <div id='form' className="card flex-1  w-full max-w-sm shrink-0 shadow-2xl  container mx-auto">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Get Started</button>
        </div>
      </form>
    </div>
        </div>
     
   
</div>

<div className='flex grid lg:grid-cols-2'>



</div>
        <div>
          
        </div>
        {/* About Our Company */}
        <div className='flex w-[100%] my-20 mx-5 gap-10'>
          <div className='w-[50%]'> 
          <img className='' src="https://i.ibb.co.com/xF3g9jg/blog-img-1.png" alt="" />

          </div>
          <div className='w-[50%]'> 
         <p>About Our Company</p>
         <h1>Why You Should Choose Us!</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br /> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

         <ul>
          <li> Elegant Properties</li>
          <li>  Amazing Locations</li>
          <li>  Rennovation Service</li>
          <li> Luxury Setup</li>
          <li> Quick Service</li>
         </ul>
      <button className='btn btn-success my-10'>Get Started</button>
          </div>
        </div>




         </div>
         
    );
};

export default Banner;