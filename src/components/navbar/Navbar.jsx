import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import './Navbar.css';
import Carousel from '../carousel/carousel.jsx/Carousel';
import {Link} from 'react-router-dom';


const Navbar = ()=> {    
    return (
        <div style={{ backgroundColor: 'white'}}>
            <nav className="navbar center ">
                <div className="container-fluid">
                    <ul className="nav nav-pills">
                        <li className="nav-item ">
                            <Link to={'/productos'} style={{color: '#e5bdb3'}}><p className='nav-link titles'>Productos</p></Link>
                        </li>
                        <li className="nav-item ">
                        <Link to={'/nosotros'} style={{color: '#e5bdb3'}}><p className='nav-link titles'>Nosotros</p></Link>
                        </li>
                        <li className="nav-item ">
                        <Link to={'/contacto'} style={{color: '#e5bdb3'}}><p className="nav-link titles">Contacto</p></Link> 
                        </li> 
                        <li className='nav-item'>
                        <Link to={'/cartwidget'} style={{color: '#e5bdb3'}}><CartWidget/></Link>
                        </li>  
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

