import React, { useContext } from 'react'
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
  return (
    <div className='Cartitem'>
      <div className="CI-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                    <div className="CI-Format CI-format-main">
                    <img src={e.image}alt=""className='CI-Product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='CR-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='removeIcon' src={remove_icon}onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
return null;
        })}
        <div className="cartitemsdown">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="CR-total-item">
                        <p>Sub total</p>
                        <p>${getTotalCartAmount()}</p>
                        </div>
                </div>
                <hr />
                <div>
                <div className="CR-total-item">
                    <p>Shipping fee</p>
                    <p>Free</p>
                    <hr /><br />
                    <br />
                    <div className="CR-total-item1">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                </div>
                <button className='CR-checkout'>Checkout</button>
            </div>

        </div>
    </div>
  )
}

export default CartItem
