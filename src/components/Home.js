import React from 'react'
import "./Home.css"

//import react router
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <div className="logo">
              <img src="newlogo.png" alt="logomarca" />
            </div>
            <div className="btnStart">
                <Link to={"/menu"}>Fazer Pedido</Link>
            </div>
        </div>        
    </div>
  )
}

export default Home