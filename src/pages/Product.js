import React from 'react'

//Import do CSS
import "./Product.css"

//import icons
import {AiFillStar} from "react-icons/ai"

const Product = () => {
  return (
    <div className='product'>
      <div className="productContainer">
        <div className="productImg">
          <img src="https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png" alt="hamburguer" />
        </div>
        <div className="productInfo">
          <div className="productInfo1">
            <div className="rate"> 
              <AiFillStar style={{color:"yellow"}}/> 
              <span>4.8</span>
            </div>
            <div className="price">R$ 20.99</div>
          </div>
          
          <div className="productInfo2">
            <p>Burguer carne</p>
            <div className="quantity">
              <div className="remove"></div>
              <div className="quantityValue">1</div>
              <div className="add"></div>
            </div>
          </div>
          <div className="productInfo3">
            <h1>Adicionais</h1>            
            <div className="addCards">
              <div className="addCard">
                <img src="https://i.pinimg.com/originals/99/52/01/995201e1c92ca9eced42364ed8a1892c.png" alt="bacon" />
                <button className='addButton'></button>
              </div>
              <div className="addCard">
                <img src="https://assets.stickpng.com/images/580b57fbd9996e24bc43c0c8.png" alt="queijo" />
                <button className='addButton'></button>
              </div>
              <div className="addCard">
                <img src="https://assets.stickpng.com/images/58da5bdc5f58be1227aec91d.png" alt="ovo" />
                <button className='addButton'></button>
              </div>
            </div>      
          </div>
          <div className="productInfo4">
            <button>Adicionar ao carrinho</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product