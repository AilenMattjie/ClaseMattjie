import React, {useState, useEffect, useContext} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import {Link} from 'react-router-dom';
import { CartContext } from "../../../context/CartContext";

function ItemDetail ({item}){
    const {img, id, titulo, descripcion, precio} =item;
    //desestructuro el item que viene por props

    const {addItem} = useContext(CartContext);
    //importo el contexto y traigo la propiedad addItem

    const [count, setCount] = useState(0);

    function onAdd (counter){
        console.log(`Cantidad de items que el cliente va a comprar ${counter}`);
        setCount(counter);
        addItem(item, counter);
    }


    return (
        <div className="container">
           <div className='col-md-6 .offset-md-3'>
            <div className="card p-3" style={{height: '600 px', width: '18rem', color: '#cbccbe'}}>
            
                <img src={img} className="card-img-top" alt="imagen del producto"/>
                
                <div className="card-body">
                    <h5 className="card-title" style={{color: '#b4b49a'}}>
                        {titulo}
                    </h5>
                    <p className="card-text" style={{color: '#b4b49a'}}>
                        {id}
                    </p>
                    <p className="card-text" style={{color: '#e5bdb3'}}>
                        {descripcion}
                    </p>
                    <p className="card-text" style={{color: '#cbccbe'}}>
                       ${precio}
                    </p>
                    {count !== 0 ?
                        <Link to = '/cart'>
                            <button>Finalizar compra</button>
                        </Link>:
                        <ItemCount initial={1} stock={8} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail