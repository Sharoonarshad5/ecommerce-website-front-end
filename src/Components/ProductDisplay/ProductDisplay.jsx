import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'> 
      <div className="productdisplay-left">
        <div className="prodcutdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-rigth-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
          ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
          ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight product designed to be used for any style this product that can be wear at any occasion 
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)
        }}>ADD TO CART</button>
        <p className="productdisplay-right-category1">
          <span>Category :</span>
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern, latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
