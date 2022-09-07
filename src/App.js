import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/InterListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Vigue, confecciones textiles"/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryid' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
    </div>
  );
}

export default App;



