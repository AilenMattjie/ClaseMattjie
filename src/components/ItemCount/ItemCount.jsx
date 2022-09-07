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

    return(
        <>
            <button href="#" className= 'btn btn-primary' onClick={ restarUnidad}> - </button>
            <p className="card-text"> {count} </p>
            <button href="#" className= 'btn btn-primary' onClick={sumarUnidad}> + </button>
            <button href="#" className= 'btn btn-primary' onClick={onAdd}>Comprar</button>
        </>
    )
}

export default ItemCount