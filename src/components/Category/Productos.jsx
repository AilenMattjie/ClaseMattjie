import React from "react";
import {Link} from 'react-router-dom';
import Cocina from '../Category/Cocina';
import Deco from '../Category/Deco';
import Guardado from '../Category/Guardado';
import Infantil from '../Category/Infantil';

const Productos = () => {
    
    return() => {
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <Link to={'/cocina'}>
                        <img src="..." class="img-fluid" alt="Cocina"/>
                    </Link>      
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Link to={<Deco/>}>
                        <img src="https://i.pinimg.com/564x/74/99/be/7499bec81482a113d1bfe61dcacfd003.jpg" class="img-fluid" alt="Deco"/>
                    </Link> 
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Link to={<Guardado/>}>
                        <img src="..." class="img-fluid" alt="Guardado"/>
                    </Link> 
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Link to={<Infantil/>}>
                        <img src="https://i.pinimg.com/564x/a6/f4/07/a6f407783bf72fa749e5273131010648.jpg" class="img-fluid" alt="Infantil"/>
                    </Link> 
                </div>
            </div>
        </div>
    }
}

export default Productos