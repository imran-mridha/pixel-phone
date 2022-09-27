import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'

const Header = ({cart}) => {
  // console.log(cart)
  // let totalQuantity = 0;
  // for(const phone of cart){
  //   totalQuantity += phone.quantity;
  // }
  return (
    <div>
      <div className="navbar bg-slate-900 py-4 px-10">
        <div className="flex-1">
          <a href='/' className="text-3xl text-white uppercase font-bold">Pixel Phone</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle">
              <div className="indicator mr-5">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                <FontAwesomeIcon className='h-5 w-5 text-white' icon={faShoppingCart} />
                <span className="badge badge-sm indicator-item">{cart.length}</span>
              </div>
            </label>
          </div>
          <div className="form-control mx-4 hidden md:flex">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;