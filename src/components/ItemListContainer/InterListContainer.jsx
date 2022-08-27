import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

function ItemListContainer ({greeting}) {

    const onAdd = () => {
        alert('Felicitaciones, tu producto ha sido cargado!')
    }

    const [items, setItems] = useState([]); 

    useEffect(()=> {

        let arrProductos = [
            {
                img: 'https://i.pinimg.com/564x/41/ca/2a/41ca2a16d585b0cc433db71c3ede6751.jpg',
                id: 1,
                titulo: 'Necesser Grande',
                descripcion: 'Necesser personalizado, puede ser confeccionado en las siguientes telas: jean, gabardina y pique (consultar por estampas en stock). Tamaño: 20cm x 15cm y 7cm de profundidad.',
                precio: 700,
            },
            {
                img: 'https://i.pinimg.com/564x/2c/8e/ba/2c8ebaf6e041dffefceb8eec33c348b2.jpg',
                id: 2,
                titulo: 'Necesser Chico',
                descripcion: 'Necesser personalizado, puede ser confeccionado en las siguientes telas: jean, gabardina y pique (consultar por estampas en stock). Tamaño: 15cm x 10cm y 5cm de profundidad.',
                precio: 550,
            },
            {
                img: 'https://i.pinimg.com/564x/22/3d/7e/223d7eb93c45c953e7a43f9297314961.jpg',
                id: 3,
                titulo: 'Delantal Grande',
                descripcion: 'Delantal de cocina para adulto, con regulador de talle en el cullo. Puede ser confeccionado en tussor o gabardina (diseños unicos).',
                precio: 900,
            },
            {  
                img: 'https://i.pinimg.com/564x/7e/4e/44/7e4e449fc5acf8ad3a8f94783e4b3464.jpg',
                id: 4,
                titulo: 'Delantal Chico',
                descripcion: 'Delantal de cocina infantil, con regulador de talle en el cullo. Puede ser confeccionado en tussor o gabardina (diseños unicos).',
                precio: 700,
            },
            {
                img: 'https://i.pinimg.com/564x/14/09/92/140992a49778e02bffe807129772a212.jpg',
                id: 5,
                titulo: 'Almohada Grande',
                descripcion: 'Almohada confeccionada en gabardina, sus medidas son: 70 x 70 cm. Viene por 1 unidad, con relleno incluido (vellon siliconado).',
                precio: 1200,
            },
            {
                img: 'https://i.pinimg.com/564x/40/d6/0a/40d60a1a99d08441e7d58e2c160df226.jpg',
                id: 6,
                titulo: 'Almohada Chica',
                descripcion: 'Almohada confeccionada en gabardina, sus medidas son: 50 x 50 cm. Viene por 1 unidad, con relleno incluido (vellon siliconado).',
                precio: 1000,
            }
        ]

        new Promise((resolve, reject)=> {

            setTimeout(()=> {
                resolve (arrProductos)
            }, 2000)
            
        }).then ((data)=>{
            setItems (data);
        }).catch().finally()
    }, [])


    return(
        <div id="main">
            <span> {greeting}</span>
            <ItemList items={items}/>
            <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </div>
        )
}

export default ItemListContainer

//<ItemCount stock={8} initial={1} onAdd={onAdd}/>