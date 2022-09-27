import React, { useEffect, useState } from 'react';
import SinglePhone from '../SinglePhone/SinglePhone';

const AllPhones = ({phones, setPhones, cart, setCart,handleCart}) => {
  // const [phones, setPhones] = useState([]);
  // useEffect(()=>{
  //   fetch('data.json')
  //   .then(res => res.json())
  //   .then(data => setPhones(data))
  // },[])
  return (
    <div className='m-10 grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        phones.map(phone => <SinglePhone key = {phone.id} phone = {phone} cart = {cart} setCart = {setCart} handleCart = {handleCart}/>)
      }
    </div>
  );
};

export default AllPhones;