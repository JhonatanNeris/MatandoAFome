import React from 'react'
//import do CSS
import "./Popular.css"

//Import Componente Card Item
import CardItem from './CardItem'

const Popular = () => {
  return (
    <div className='popularContainer'>
        <h1>Popular</h1>
        <div className="popularCards">
            <CardItem />
            <CardItem />

        </div>
    </div>
  )
}

export default Popular