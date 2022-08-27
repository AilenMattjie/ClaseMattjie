import React from 'react';
import { Link } from 'react-router-dom';

function Item ({img, id, titulo, descripcion, precio}) {

    return(  
        <div id="card" className="col col-md-3">
            <div className="card" style={{width: '18rem'}}>
                <Link to={`/item/${id}`}>
                <img src={img} className="card-img-top" alt="imagen del producto"/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title" style={{color: '#98a287'}}>
                        {titulo}
                    </h5>
                    <p className="card-text" style={{color: '#98a287'}}>
                        {id}
                    </p>
                    <p className="card-text" style={{color: '#98a287'}}>
                        {descripcion}
                    </p>
                    <p className="card-text" style={{color: '#98a287'}}>
                       ${precio}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Item 