import React from "react";
import {Link} from 'react-router-dom';
import Cocina from '../Category/Cocina';
import Deco from '../Category/Deco';
import Guardado from '../Category/Guardado';
import Infantil from '../Category/Infantil';

const Productos = () => {
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <Link to={'/category/cocina'}>
                        <img src="https://i.pinimg.com/564x/dc/ed/5c/dced5cb5b777dd197c78507c8ea09f97.jpg" className="img-fluid" alt="Cocina"/>
                    </Link>    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={'/category/deco'}>
                        <img src="https://i.pinimg.com/564x/74/99/be/7499bec81482a113d1bfe61dcacfd003.jpg" className="img-fluid" alt="Deco"/>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={'/category/guardado'}>
                        <img src="https://i.pinimg.com/564x/97/f0/d4/97f0d4667bb9a7c3b7cfc1d92f198199.jpg" className="img-fluid" alt="Guardado"/>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={'/category/infantil'}>
                        <img src="https://i.pinimg.com/564x/a6/f4/07/a6f407783bf72fa749e5273131010648.jpg" className="img-fluid" alt="Infantil"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Productos

