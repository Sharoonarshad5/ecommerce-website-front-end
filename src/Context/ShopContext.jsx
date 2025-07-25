import React, { createContext } from "react";
import { useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext =createContext(null);

const getDefaultCart =()=>{
    let cart ={};
    for(let index = 0; index < all_product.length+1;index++){
       cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems]= useState(getDefaultCart());

    
    const addToCart =(Itemsid)=>{
    setCartItems((prev)=>({...prev,[Itemsid]:prev[Itemsid]+1}))
    console.log(cartItems)
}
    const removeFromCart =(Itemsid)=>{
    setCartItems((prev)=>({...prev,[Itemsid]:prev[Itemsid]-1}))
}
    const getTotalCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItems)
            {
                    const itemId = Number(item);
                    const itemInfo = all_product.find(product => product.id === itemId);
                    
                    if (itemInfo) {
                        totalAmount += itemInfo.new_price * cartItems[itemId];
                    } 
                    else {
                        console.warn(`Product with ID ${itemId} not found.`);
                    }
                }
                return totalAmount;
            }

        const getTotalCartItems = () =>{
            let totalItems =0;
            for(const item in cartItems)
                {
                    totalItems += cartItems[item];
                }
                return totalItems;
            }
        

const contextValue = {getTotalCartItems,all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount};
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider;