import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/InterListContainer';
import { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartWidget from './components/cartWidget/CartWidget';
import Cocina from './components/Category/Cocina';
import Deco from './components/Category/Deco';
import Guardado from './components/Category/Guardado';
import Infantil from './components/Category/Infantil';
import Productos from './components/Category/Productos';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Bienvenido a Vigue, confecciones textiles"/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:categoryid' element={<ItemDetailContainer/>}/>
      <Route path='/cart'/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




