import './App.css';

//Import componentes
import Home from "./components/Home";
import Menu from './components/Menu';

//Import Pages
import Product from './pages/Product';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Profile from './pages/Profile';

//Import react router
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import hooks
import { useState, useEffect } from 'react';

//URL base para requisição dos produtos
//const url = "http://localhost:3000/products"
const url = "https://json-matando-a-fome.vercel.app/products"

function App() {

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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>  
       
    </div>
  );
}

export default App;
