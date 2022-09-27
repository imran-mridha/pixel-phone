// import { faClose } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SingleCart from '../singleCart/SingleCart';

const Cart = ({cart, handlePhoneRemove}) => {
  let totalQuantity = 0;
  let price = 0;
  let totalPrice = 0;
  for(const phone of cart){
    totalQuantity += phone.quantity;
    price = phone.price * phone.quantity;
    totalPrice += price;
  }
  return (
    <div className=''>
      <h2 className='text-3xl font-bold border-b-2 py-5'>Cart Details</h2>
      {cart?.map(phone => <SingleCart key = {phone.id} phone = {phone} handlePhoneRemove = {handlePhoneRemove}/>)}
      <div className='text-start m-5 font-bold text-xl'>
        <h1>Selected Phones Quantinty: {totalQuantity}</h1>
        <p>Total Price: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;