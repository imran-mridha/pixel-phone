import React from 'react';

const SinglePhone = ({phone, setCart, cart,handleCart}) => {
  const {id,img,name,price} = phone;
  
  return (
    <div className='shadow-2xl rounded-2xl'>
      <img className='w-full h-80 p-4' src={img} alt="" />
      <div className='text-start px-4 pb-4'>
        <p className='text-3xl font-semibold'>{name}</p>
        <p className='py-3 pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, qui!</p>
        <p className='text-2xl font-semibold'>Price: ${price.toFixed(2)}</p>
        {/* <button className="btn btn-sm mr-4 my-4">See Details</button> */}
        <button onClick={()=>handleCart(phone)} className="btn btn-sm my-4">Add To Cart</button>
      </div>
    </div>
  );
};

export default SinglePhone;