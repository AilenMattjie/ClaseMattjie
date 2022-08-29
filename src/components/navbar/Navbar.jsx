import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import './Navbar.css';
import Carousel from '../carousel/carousel.jsx/Carousel';
import {NavLink} from 'react-router-dom';
import Cocina from '../Category/Cocina';
import Guardado from '../Category/Guardado';
import Infantil from '../Category/Infantil';
import Deco from '../Category/Deco';

const Navbar = ()=> {    
    return (
        <div style={{ backgroundColor: 'white'}}>
            <nav className="navbar center ">
                <div className="container-fluid">
                    <ul className="nav nav-pills">
                        <li className="nav-item ">
                            <p className='nav-link titles'>{<NavLink to={'/productos'} style={{color: '#e5bdb3'}}>Productos</NavLink>}</p>
                        </li>
                        <li className="nav-item ">
                            <p className='nav-link titles'>{<NavLink to={'/nosotros'} style={{color: '#e5bdb3'}}>Nosotros</NavLink>}</p>
                        </li>
                        <li className="nav-item ">
                            <p className="nav-link titles">{<NavLink to={'/contacto'} style={{color: '#e5bdb3'}}>Contacto</NavLink>}</p>   
                        </li> 
                        <li className='nav-item'>
                            <p className='nav-link titles'>{<NavLink to={'/cartwidget'} style={{color: '#e5bdb3'}}>{<CartWidget/>}</NavLink>}</p>
                        </li>  
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

