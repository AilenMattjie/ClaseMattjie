import React from 'react';
import { Link } from 'react-router-dom';

function Item ({img, id, titulo, precio}) {

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
                </div>
            </div>
        </div>
    )
}

export default Item 