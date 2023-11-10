import React from 'react'
import "./PromoCard.css"

const PromoCard = () => {
  return (
    <div className='promoCard'>
        <div className="containerPromoCard">
            <h1>Promoções</h1>
            <div className="promoBanner">
                <h1>Oferta diária</h1>
                <p><span>Batata frita grátis</span></p>
                <p>Para todos os pedidos acima de R$ 15.00</p>
                <img className="imgBanner" src="https://denorteasulburguer.com.br/wp-content/uploads/2023/03/fritas-grande.png" alt="Batata Frita" />

            </div>
        </div>       
    </div>
  )
}

export default PromoCard