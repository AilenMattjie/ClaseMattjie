import React, {useState, useEffect} from "react";

function ItemDetail ({item}){
    const {img, id, titulo, descripcion, precio} =item;
    //desestructuro el item que viene por props

    return(
        <div>
            <h1>{titulo} - {id}</h1>
            <img src={img}></img>
            <h3>{precio}</h3>
        </div>
    )
}

export default ItemDetail