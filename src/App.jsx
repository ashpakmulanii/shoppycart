import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { Product } from './Components/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </>

  );
}

export default App;
