import React, {useState, useEffect} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import {useState} from 'react';
import {Link} from 'react-router-dom';

function ItemDetail ({item}){
    const {img, id, titulo, descripcion, precio} =item;
    //desestructuro el item que viene por props

    const [count, setCount] = useState(0);

    function onAdd (counter){
        setCount(counter);
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
                    {counter !== 0 ?
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