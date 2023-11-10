import React from 'react'
import "./Menu.css"

//Import components
import SearchBar from './SearchBar'
import Categories from './Categories'
import PromoCard from './PromoCard'
import Popular from './Popular'
import Navbar from './Navbar'


const Menu = () => {
  return (
    <div className='menu'>
      <div className="container">
        <SearchBar />
        <Categories />
        <PromoCard />
        <Popular />
        <Navbar />

      </div>      
    </div>
  )
}

export default Menu