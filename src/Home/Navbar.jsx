// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFlagUsa } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { signOut } from 'firebase/auth';
// import { AuthContext } from '../providers/AuthProvider'; 

const Navbar = () => {
  //  const {user, logOut} =useContext(AuthContext)
    
   const handleLogOut = () =>{
    signOut()
    .then(()=>console.log('user logged out'))
    .catch(error =>console.error(error))
   }



    return (
        <div className="navbar">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white font-bold"><FiHome className='text-green-400 font-bold text-2xl' ></FiHome>Your Properties</a>
        </div>
        <div className="navbar-end hidden lg:flex">
         
        </div>
        <div className="navbar-center  ">
        <ul className="menu menu-horizontal px-1 gap-5 text-[15px] font-bold text-white">
            <Link className='' to="/" title='Home'  >Home</Link>
            <Link className='' title='Serveices' >Serveices</Link>
            <Link className='' title='Properties' >Properties</Link>
            <Link className='' title='Offices' >Offices</Link>
            <Link className='' title='About us' to="about" >About us</Link>
            <Link className='' title='login' to="/login" >LogIn</Link>
            
        {/* {
            user? <Link><button onClick={handleSignOut} className="btn bg-blue-400 hover:bg-blue-500 text-white ">SignOut</button></Link>:
            <Link to='/login'><button className="btn bg-blue-400 hover:bg-blue-500 text-white ">Login</button></Link>
        } */}
        
            <Link className='mr-4' title='Register' to="/register">Register</Link>
          </ul>
          <FaFlagUsa className='text-xl'></FaFlagUsa>
          {/* search button  */}
        <button className="btn btn-ghost btn-circle"> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>

          <details>
          <summary> <a className="btn bg-black text-white">propile</a></summary>
          <ul className="p-2">

          <Link to="login"><a className='btn bg-black text-white'>
          <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           </div>
           </div>
            user propile</a></Link>

            
            <Link to="updateprofile"><a className='btn bg-black text-white'>
            <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           </div>
           </div>
              update propile</a></Link>
           
          </ul>
        </details>
        </div>
      </div>
    );
};

export default Navbar;