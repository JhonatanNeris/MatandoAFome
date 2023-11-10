import React from 'react'

//import do CSS
import "./CartItem.css"

const CartItem = () => {
  return (
    <div>
        <div className="cartItemContainer">
            <div className="cartItemImg">
                <img src="https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png" alt="" />
            </div>
            <div className="cartProductInfo">
                <div className="cartItemInfo">
                    <h2>Hamburguer Carne</h2>
                    <h1>R$ 20.99</h1>
                    <div className="quantity">
                        <div className="remove"></div>
                        <div className="quantityValue">1</div>
                        <div className="add"></div>
                    </div>
                </div>
                <div className="cartItemDel"></div>
            </div>            
        </div>
    </div>
  )
}

export default CartItem