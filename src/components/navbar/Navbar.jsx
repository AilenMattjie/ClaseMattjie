import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import './Navbar.css';

const Navbar = ()=> {
    const DropdownItem = ["Cocina", "Guardado", "Deco"];
    
    return (
        <nav className="navbar fixed-top bg-light">
            <div className="container-fluid">
                <ul className="nav nav-pills">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle titles" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu titles">
                                {DropdownItem.map((item, index) => (
                                    <li><a className="dropdown-item titles" href="#" key={index}>{item}</a></li>
                                ))} 
                            </ul>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link titles" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link titles" href="#">Contacto</a>
                    </li>
                    <CartWidget/>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar