import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart, removeFromDb } from '../../utilities/fakedb';
import AllPhones from '../AllPhones/AllPhones';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Main = () => {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPhones(data))
  },[])

  useEffect(()=>{
    const storedCart = getStoredCart();
    let savedCart = [];
    for(const id in storedCart){
      const addedProduct = phones.find(phone => phone.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart)
  },[phones])

  const handleCart = (selectedPhone)=>{
    const esists = cart.find(phone => phone.id === selectedPhone.id);
    let newCart = [];
    if(!esists){
      selectedPhone.quantity = 1;
      newCart = [...cart, selectedPhone]
    }else{
      const rest = cart.filter(product => product.id !== selectedPhone.id);
      esists.quantity = esists.quantity + 1;
      newCart = [...rest, esists];
    }
    setCart(newCart);
    addToDb(selectedPhone.id)
  }

  const handlePhoneRemove = (id) => {
    removeFromDb(id);
    // eslint-disable-next-line no-restricted-globals
    location.reload()



    
    // const leftCart = cart.find(phone => phone.id !== removePhone.id);
    // setCart(leftCart)
    // addToDb(removePhone.id)
  }
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
            <Header cart = {cart}/>
            <AllPhones phones = {phones} setPhones = {setPhones} cart = {cart} setCart ={setCart} handleCart = {handleCart}/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-[500px] bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <Cart cart = {cart} handlePhoneRemove = {handlePhoneRemove}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;