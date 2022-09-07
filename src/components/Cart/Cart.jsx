import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

function Cart(){
    const {items} = useContext(CartContext);
    return(
        <>
            <div> Cart </div>
            {!items && <span> no poseo items</span>
            //si no hay items
            }
            {items.length &&
            // si hay items hace lo siguiente:            
            <ul>
                {items.map(((item, indx)=> 
                    <li key={indx}> {item.titulo}-{item.quantity}</li>
                ))}
            </ul>
            }
        </>
        
    );
}

export default Cart