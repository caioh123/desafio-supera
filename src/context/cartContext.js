import React, {createContext, useState, useContext} from 'react'


export const CartContext = createContext([])

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])


    return (
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)