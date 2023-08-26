import React, { createContext, useContext, useState } from 'react';

const ContadorContext = createContext();

export function CartProvider2({ children }) {
    const [items, setItems] = useState(0);

    return (
        <ContadorContext.Provider value={{ items, setItems }}>
            {children}
        </ContadorContext.Provider>
    );
}

export function useCartContext() {
    return useContext(ContadorContext);
}
