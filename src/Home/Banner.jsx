import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { FaLocationPinLock } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { BiSolidLocationPlus } from 'react-icons/bi';
 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
 

const Banner = () => {

  const handleLogin = e =>{
    e.preventDefault();
    const text = e.target.text.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, text)

    // create user 
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    });
   }



    return (
         <div>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/pz1KvTJ/10-04-21-The-6-Types-of-Commercial-Real-Estate-Property-new.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60 "></div>
    <div className='row items-center  grid lg:grid-cols-2   container mx-auto'>
         <div id='banner-card' > 
         <h1 className='text-5xl font-semibold text-white h-[400px] '><span className=''>Welcome to Our <br /> Property World</span> 
          <p className='text-[14px] my-10'>Read Our Six Step Golden to making your <br /> carbon reduction Strategy Reality</p>
          <p className='text-[14px] my-10'>Trusted By Many Clients: </p>
          </h1> 
         </div>
        
        {/* form  */}
        <div id='form' className="card flex-1  container mx-auto">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <h1 id='form-title'>Book Your Property Now!</h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='text' className='input input-bordered' placeholder='Type your name' />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' id='get-started-btn' className="btn  text-white  text-[1rem] w-[150px]">Get Started</button>
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
        <div id='about-company' className=' w-[100%] my-20 mx-5 gap-10 grid grid-cols-2'>
          <div  className=' '> 
          <img id='about-img' className='img-fluid' src="https://i.ibb.co.com/xF3g9jg/blog-img-1.png" alt="" />

          </div>
          <div id='about-section' className=''> 
         <p className='about-subtitle'>About Our Company</p>
         <h1 className='about-title'>Why You Should Choose Us!</h1>
         <p className='about-section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br /> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

         <ul>
          <li> Elegant Properties</li>
          <li>  Amazing Locations</li>
          <li>  Rennovation Service</li>
          <li> Luxury Setup</li>
          <li> Quick Service</li>
         </ul>
      <button id='get-started-btn' className='btn btn-success my-10 text-white font-bold'>Get Started</button>
          </div>
        </div>

        {/* Services section  */}
<section id='Services-section'>
  <h1 id='Services-h1' className='justify-center text-center items-center'>Services</h1>
  <div className='heading_line'></div>
  <div className='grid lg:grid-cols-3 text-black container mx-auto justify-center text-center items-center container mx-auto'> 
    <div className='flex'>
      <div></div>
      <div className='flex'> 
        <div>
        <IoSettingsOutline className='gear'></IoSettingsOutline>
        </div>
        <div>
        <p className='gear-p mb-2'>Awesome Service</p>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <div className='flex'> 
     <div>
     <FaLocationPinLock className='gear'></FaLocationPinLock>
     </div>
     <div>
     <p className='gear-p mb-2'>Free Parking</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />  sed do eiusmod tempor incididunt ut <br />  labore et dolore magna aliqua.</p>
     </div>
    </div>
    <div className='flex'> 
      <div>
      <SlLocationPin className='gear'></SlLocationPin>
      </div>
   <div className='gear-text'>
   <p className='gear-p mb-2'>Elegant Location</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />  sed do eiusmod tempor incididunt ut <br />  labore et dolore magna aliqua.</p>
   </div>
    </div>
  </div>
</section>

{/* Why You Should Choose Us!  */}
<section id='choose-us-section' className='mt-[3rem]'>
<div className="hero ">
  <div className="hero-content flex-col lg:flex-row bg-[#363636]">
    <img
      src=" https://i.ibb.co.com/VWZvnB1/hbghkj.png"
      className="max-w-lg rounded-lg shadow-2xl " />
    <div>
      <h1 className="choose-us-title text-white">Why You Should Choose Us!</h1>
      <p id='choose-us-p' className="py-6 text-white">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button id='get-started-btn' className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse bg-[#363636]">
    <img
      src=" https://i.ibb.co.com/Pw1fWBw/blog-img-2.png"
      className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="choose-us-title">Why You Should Choose Us!</h1>
      <p id='choose-us-p' className="py-6 text-white">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button id='get-started-btn' className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</section>

         </div>
         
    );
};

export default Banner;