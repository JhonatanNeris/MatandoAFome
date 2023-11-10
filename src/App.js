import './App.css';

//Import componentes
import Home from "./components/Home";
import Menu from './components/Menu';

//Import Pages
import Product from './pages/Product';
import Cart from './pages/Cart';


//Import react router
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
      </BrowserRouter>  
       
    </div>
  );
}

export default App;
