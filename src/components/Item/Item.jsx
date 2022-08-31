import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

function Item ({img, id, titulo, precio}) {
    const onAdd = () => {
        alert('Felicitaciones, tu producto ha sido cargado!')
    }
    return(  
        <div id="card" className='col'>
            <div className="card p-3" style={{height: '430px', width: '18rem', color: '#f3f2fo'}}>
                <Link to={`/item/${id}`}>
                <img src={img} className="card-img-top" alt="imagen del producto"/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title" style={{color: '#8f8e8c'}}>
                        {titulo}
                    </h5>
                    <p className="card-text" style={{color: '#8f8e8c'}}>
                       ${precio}
                    </p>
                    <ItemCount stock={8} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default Item 