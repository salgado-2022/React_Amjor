import React, { createContext, useContext, useState, useEffect } from 'react';

const ContadorContext = createContext();

export function CartProvider2({ children }) {
    const [items, setItems] = useState(0);


    useEffect(() => {
        if (items < 0) {
            setItems(0);
        }
    }, [items]);

    return (
        <ContadorContext.Provider value={{ items, setItems }}>
            {children}
        </ContadorContext.Provider>
    );
}

export function useCartContext() {
    return useContext(ContadorContext);
}
