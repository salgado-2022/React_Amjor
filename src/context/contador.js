import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider2({ children }) {
    const [items, setItems] = useState(0);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}
