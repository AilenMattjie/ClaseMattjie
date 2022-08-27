import React from "react";
import Item from "../Item/Item";

function ItemList ({items}) {

    return(
        <div className="container">
            <div className="row">
                
                {items.map((item, index)=>
                    <>
                        <Item key={index} 
                        img={item.img} 
                        id={item.id} 
                        titulo={item.titulo} 
                    
                        precio={item.precio}/>
                    </>
                 )}
                
            </div>
        </div>
    )
}

export default ItemList