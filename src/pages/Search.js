import React from 'react'

//import do css
import "./Search.css"

//import hooks
import { useState, useEffect } from 'react';

//import components
import SearchBar from '../components/SearchBar';
import CardItem from '../components/CardItem';
import Navbar from '../components/Navbar';

//URL base para requisição dos produtos
//const url = "http://localhost:3000/products"
const url = "https://json-matando-a-fome.vercel.app/products"

const Search = () => {

    //Resgatando dados do json server 
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData(){
            
            const res = await fetch(url)

            const data = await res.json()
    
            setProducts(data)
        }

        fetchData();
    },[]);

    console.log(products);

    return (
        <div className='search'>
            <div className="container">
                <SearchBar />
                <div className='searchProducts'>
                    {products.map((product) => (
                        // <li key={product.id}>
                        //     {product.name} - R$: {product.price}
                        // </li>                       
                        <CardItem 
                            key={product.id}
                            name={product.name} 
                            price={product.price} 
                            img={product.img}
                        />
                    ))}
                </div>  
                <Navbar/>             
            </div>
        </div>
    )
}

export default Search