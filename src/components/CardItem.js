import React from 'react'
import "./CardItem.css"

const CardItem = () => {
  return (
    <div className="cardItem">
        <div className='CardItemContainer'>
            <img src="https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png" alt="hamburguer" />  
            {/* <div className="buttonAdd"></div>  */}
            <button className='buttonAdd'></button>     
        </div>
        <div className="productInfo">
            <h1>Burguer Carne</h1>
            <p>R$<span>21.99</span></p>
        </div>        
    </div>
    
  )
}

export default CardItem