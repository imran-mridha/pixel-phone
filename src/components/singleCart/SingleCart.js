import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleCart = ({ phone,handlePhoneRemove }) => {
  const { img, name, quantity, price } = phone;
  let totalPrice = quantity * price;
  // let totalQuantity = quantity;
  return (
    <div>
      <div className='font-semibold flex justify-between items-center m-5 border-b-2 py-2'>
        <img className='w-10' src={img} alt="" />
        <p>{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: {totalPrice.toFixed(2)}</p>
        <p onClick={()=>handlePhoneRemove(phone.id)}><FontAwesomeIcon icon={faClose} /></p>
      </div>
    </div>
  );
};

export default SingleCart;