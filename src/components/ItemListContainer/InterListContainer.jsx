import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Carousel from "../carousel/carousel.jsx/Carousel";
import {useParams} from "react-router-dom";

function ItemListContainer ({greeting}) {
    
    const {categoryid}= useParams();
    const [items, setItems] = useState([]); 
     
    useEffect(()=> {
        let arrProductos = [
            {
                img: 'https://i.pinimg.com/564x/da/e0/fc/dae0fcf9672f5630314ba34eabdf4540.jpg',
                id: 1,
                titulo: 'Necesser',
                descripcion: 'Necesser personalizado, puede ser confeccionado en las siguientes telas: jean, gabardina y pique (consultar por estampas en stock). Tamaño: 20cm x 15cm y 7cm de profundidad.',
                precio: 700,
                category: 'guardado'
            },
            {
                img: 'https://i.pinimg.com/564x/f6/c1/64/f6c16427070e808916de7eb01158372e.jpg',
                id: 2,
                titulo: 'Contenedor estampado',
                descripcion: 'Contenedor circular con estampas de diseño propio, confeccionado en lienzo (consultar por estampas en stock).',
                precio: 600,
                category: 'guardado'
            },
            {
                img: 'https://i.pinimg.com/564x/d8/4d/87/d84d87d223b5c9c3bfeb30d4318ffc3a.jpg',
                id: 3,
                titulo: 'Contenedor conejo',
                descripcion: 'Contenedor circular, modelo conejo. Confeccionado en lienzo color crudo',
                precio: 600,
                category: 'guardado'
            },
            {
                img: 'https://i.pinimg.com/564x/22/3d/7e/223d7eb93c45c953e7a43f9297314961.jpg',
                id: 4,
                titulo: 'Delantal Grande',
                descripcion: 'Delantal de cocina para adulto, con regulador de talle en el cullo. Puede ser confeccionado en tussor o gabardina (diseños unicos).',
                precio: 900,
                category: 'cocina'
            },
            {  
                img: 'https://i.pinimg.com/564x/7e/4e/44/7e4e449fc5acf8ad3a8f94783e4b3464.jpg',
                id: 5,
                titulo: 'Delantal Chico',
                descripcion: 'Delantal de cocina infantil, con regulador de talle en el cullo. Puede ser confeccionado en tussor o gabardina (diseños unicos).',
                precio: 700,
                category: 'cocina'
            },
            {
                img: 'https://i.pinimg.com/564x/6e/88/aa/6e88aa8054ed6fa1c8d4239e8f09f184.jpg',
                id: 6,
                titulo: 'Banderin oso',
                descripcion: 'Banderin decorativo infantil, con estampa de Osos. Se realizan por encargo, con 5/7 días de demora.',
                precio: 650,
                category: 'deco'
            },
            {
                img: 'https://i.pinimg.com/564x/b2/71/5b/b2715b5a5313ba80bd8f5be7f9f3fb13.jpg',
                id: 7,
                titulo: 'Banderin conejo',
                descripcion: 'Banderin decorativo infantil, con estampa de Osos. Se realizan por encargo, con 5/7 días de demora.',
                precio: 650,
                category: 'deco'
            },
            {
                img: 'https://i.pinimg.com/564x/78/22/67/78226757590f07797a3b684c02138daa.jpg',
                id: 8,
                titulo: 'Babero Lunares',
                descripcion: 'Color: celeste. Talle: 0 a 6 meses. Reversible: una cara lisa y otra estampada',
                precio: 500,
                category: 'infantil'
            },
            {
                img: 'https://i.pinimg.com/736x/a4/ad/da/a4adda63ac28c0e10698502ed4f2f3b2.jpg',
                id: 9,
                titulo: 'Babero Lunares',
                descripcion: 'Color: rosa. Talle: 0 a 6 meses. Reversible: una cara lisa y otra estampada',
                precio: 500,
                category: 'infantil'
            },
            {
                img: 'https://i.pinimg.com/564x/d1/f7/a3/d1f7a35b6491fc4fcebce134da070990.jpg',
                id: 10,
                titulo: 'Babero Boho',
                descripcion: 'Color: azul-blanco. Talle: 0 a 6 meses. Estampa combinada',
                precio: 500,
                category: 'infantil'
            },
            {
                img: 'https://i.pinimg.com/564x/03/e9/77/03e977724e9944e3d959f7b0f031df34.jpg',
                id: 11,
                titulo: 'Cubo sensorial chico',
                descripcion: 'Medidas: 10x10. Con sonajero interno, confeccionado con telas y cintas de diferentes texturas.',
                precio: 650,
                category: 'infantil'
            },
            {
                img: 'https://i.pinimg.com/564x/0f/d8/6c/0fd86c0e0a0f51ceb52b8998bb343198.jpg',
                id: 12,
                titulo: 'Cubo sensorial grande',
                descripcion: 'Medidas: 15x15. Con sonajero interno, confeccionado con telas y cintas de diferentes texturas.',
                precio: 650,
                category: 'infantil'
            },
            {
                img: 'https://i.pinimg.com/564x/cd/f9/4d/cdf94d24ed9f6081025ee996f7ebadb4.jpg',
                id: 13,
                titulo: 'Pelota Montessori',
                descripcion: 'De facil agarre, ideal para niño de 0 a 1 año. Con sonajero interno, confeccionado con telas de diferentes texturas',
                precio: 600,
                category: 'infantil'
            }
        ]
       
        new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve (arrProductos)
            }, 2000)      
        }).then ((data)=>{
            if( categoryid !== undefined){
                setItems(
                    data.filter((item)=> item.category == categoryid)
                );
            }
            else{
                setItems (data);
        }}).catch().finally()
    }, [categoryid])
    return(
        <div id="main">
            <Carousel/>
            <span> {greeting}</span>
            <ItemList items={items}/>
        </div>
        )
}

export default ItemListContainer


