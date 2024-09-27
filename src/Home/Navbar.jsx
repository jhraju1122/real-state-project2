import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlagUsa } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
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
        <ul className="menu menu-horizontal px-1 gap-5 text-xl font-bold text-white">
            <Link className=''  >Home</Link>
            <Link className=''  >Serveices</Link>
            <Link className=''  >Properties</Link>
            <Link className=''  >Offices</Link>
            <Link className=''  >About us</Link>
            <Link className='' to="login">Login</Link>
            <Link className='mr-4' to="/register">Register</Link>
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
          <summary> <a className="btn">propile</a></summary>
          <ul className="p-2">
          <li><a className='btn'>
          <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
            user propile</a></li>
            <li><a className='btn'>update propile</a></li>
           
          </ul>
        </details>
        </div>
      </div>
    );
};

export default Navbar;