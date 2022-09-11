import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";

function Cart(){
    const {items, removeItem, clear} = useContext(CartContext);
    return(
        <div>
            <div> Cart </div>
            {!items.length ? <span> no poseo items <Link to='/'><button>Ir a Home</button></Link></span> :
            //si no hay items
            // si hay items hace lo siguiente: 
            <>           
                <ul>
                    {items.map(((item, indx)=> 
                        <li key={indx}> {item.titulo}-{item.quantity}
                        <button onClick={()=> removeItem(item.id)}>Remover</button></li>
                    ))}
                </ul>
                <p>
                    precio total = ${items.reduce((pv, cv)=> pv + (cv.precio * cv.quantity),0)}
                </p>
            </>
            }  

            <div>
                <button onClick={()=> clear()}> Limpiar carrito</button>
            </div>

        </div>);
}

export default Cart
//precio total 
//reduce es un metodo, pv es precio ant y cv el actual, operacion y valor inicial