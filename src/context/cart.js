import { React, useReducer } from 'react'
import { createContext, useState } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

// Se crea el context
export const CartContext = createContext()

//
// expect(
//     reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])

export function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)
    //const [cart, setCart] = useState([])

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
            type: 'REMOVE_TO_CART',
            payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return { state, addToCart, removeFromCart, clearCart }

}
// Se crea el CartProvider
export function CartProvider ({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            { children }
        </CartContext.Provider>
    )
}