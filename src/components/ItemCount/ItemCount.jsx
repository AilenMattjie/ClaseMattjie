import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial , onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumarUnidad = ()=>  {if(count <stock)
        setCount (count + 1);
    };

    const restarUnidad = ()=>  {if(count >= initial)
        setCount (count - 1)
    };

    return() => {
        <>
            <a href="#" className= 'btn btn-primary' onClick={ restarUnidad}> - </a>
            <p className="card-text"> {initial} </p>
            <a href="#" className= 'btn btn-primary' onClick={sumarUnidad}> + </a>
            <a href="#" className= 'btn btn-primary' onClick={onAdd}>Comprar</a>
        </>
    }
}

export default ItemCount