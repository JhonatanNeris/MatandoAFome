import React from 'react'
import "./CardItem.css"

const CardItem = (props) => {
  return (
    <div className="cardItem">
        <div className='CardItemContainer'>
            <img src={props.img} alt="hamburguer" />  
            {/* <div className="buttonAdd"></div>  */}
            <button className='buttonAdd'></button>     
        </div>
        <div className="productInfo">
            <h1>{props.name}</h1>
            <p>R$<span>{props.price}</span></p>
        </div>        
    </div>
    
  )
}

export default CardItem