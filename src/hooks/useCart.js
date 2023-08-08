import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }

    // CONSOLE LOG CART hook useCart
    console.log("Cart context:", context);

    return context;
};
