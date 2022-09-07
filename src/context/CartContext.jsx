import React, {createContext, useContext, useState} from "react";

export const CartContext = createContext();
function CartProvider({children}){
    const [items, setItems] = useState([]);

    function addItem(item, quantity){
        console.log({...item, quantity})

        if(isInCart(item.id)){
            let aux = item;
            // copia del array
            let ItemIndex = aux.indexOf((el)=> el.id == item.id);
            // agarra el index de donde pertenecia ese prod que esta duplicado
            aux[ItemIndex].quantity += quantity;
            //aumenta solamente la cantidad y la suma a la anterior
            setItems(...aux)
            // con el spreed (...) digo que es un array nuevo
        }else{
            setItems([...items,{...item, quantity}]);
        }
        
    }

    function removeItem(itemId){
        setItems(itemId.filter((el)=> el.id == itemId));
        //filter
    }

    function clear (){
        setItems([]);
        // queda un array vacio asi limpia todo
        //se puede incluir un alert que avise que se limpio el carrito, 
        //no dentro del context pero si dentro del evento
    }

    function isInCart(itemId){
        //es un helper, nos ayuda a saber si hay algo en el carrito
        if(!!items){
            return items.find((el)=> el.id == itemId);
        }else{
            return false
        }
    }

    return(
        //en value voy pasando las funciones que voy generando
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider