import { React, useReducer } from 'react'
import { createContext, useEffect } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

// Se crea el context
export const CartContext = createContext()

//
// expect(
//     reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])

export function useCartReducer() {
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

    const incrementQuantity = (productId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
    };

    const decrementQuantity = (productId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
    };

    return { state, dispatch, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }

}


export function CartProvider({ children }) {
    const { state, dispatch, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCartReducer();

    useEffect(() => {
        const storedCart = JSON.parse(window.localStorage.getItem('cart')) || [];
        if (storedCart.length > 0) {
            dispatch({ type: 'SET_CART', payload: storedCart });
        }
    }, [dispatch]);

    return (
        <CartContext.Provider
            value={{
                cart: state,
                addToCart,
                removeFromCart,
                clearCart,
                incrementQuantity,
                decrementQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

