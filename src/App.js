import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/InterListContainer';
import { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      
    <Route path='/' element={<ItemListContainer greeting="Bienvenido a Vigue, confecciones textiles"/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
