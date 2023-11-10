import React from 'react'

//Import do CSS
import "./SearchBar.css"
//Import do Router
import { useNavigate } from 'react-router-dom'
//Import Hooks
import { useState } from 'react'
//import icons
import { FaCoffee, FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate("/search?q=" + query)
    }
    
    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit}>

                
                <div className="searchBarForm">
                    <FaSearch style={{color:"#505050"}}/>
                    <input type="text" placeholder="Pesquisar" onChange={(e) => setQuery(e.target.value)} />
                </div>
                
                {/* <input type="submit" value="Buscar" /> */}
            </form>
        </div>
    )
}

export default SearchBar