import React from 'react'

//import do css
import "./Cart.css"

//import componets
import Navbar from '../components/Navbar'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <div className='cart'>
        <div className="cartContainer">
            <div className="cartQuantity">
                <h2>2 itens no carrinho</h2>
            </div>
            <CartItem />
            <CartItem />
            <div className="productObs">
                <h1>Observações</h1>
                <form action="">
                    {/* <input type="textarea" /> */}
                    <textarea className='textarea'/>
                </form>
            </div>
            <div className="totalCart">
                <h1>Total:</h1>
                <span>R$ 41.98</span>
            </div>
            <div className="confirmBtn">
                <button>Confirmar pedido</button>
            </div>
            <div className="divNavbar">
                <Navbar />
            </div>
            

        </div>

    </div>
  )
}

export default Cart