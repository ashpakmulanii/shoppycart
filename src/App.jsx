import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import { About } from './Components/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />



      </Routes>
    </>

  );
}

export default App;
