export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}
export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case 'ADD_TO_CART': {
            const { ID_Ancheta } = actionPayload
            const productInCartIndex = state.findIndex(item => item.ID_Ancheta === ID_Ancheta)

            if (productInCartIndex >= 0) {
                const newState = [
                    ...state,
                    {
                        ...actionPayload,
                        quantity: 1,
                        insumos: actionPayload.insumos || [],
                    }
                ]

                updateLocalStorage(newState)
                return newState
            }


            // if (productInCartIndex >= 0) {
            //     const newState = structuredClone(state)
            //     newState[productInCartIndex].quantity += 1
            //     console.log("Product added to existing:", newState);
            //     return newState
            // }


            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1,
                    insumos: actionPayload.insumos || [],
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_TO_CART': {
            const { ID_Ancheta } = actionPayload
            const newState = state.filter(item => item.ID_Ancheta !== ID_Ancheta)
            console.log("Product removed:", newState);
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART': {
            updateLocalStorage(cartInitialState) // Limpiar carrito 1
            window.localStorage.removeItem('cart') // Re limpiar el carrito
            console.log("Cart cleared");
            return cartInitialState
        }

        case 'SET_CART':
            // Aquí actualizamos el estado con los datos del carrito
            return actionPayload;

        case 'UPDATE_PRICE': {
            const { ID_Ancheta, PrecioUnitario } = actionPayload;
            const productIndex = state.findIndex(item => item.ID_Ancheta === ID_Ancheta);

            if (productIndex >= 0) {
                const newState = [...state];
                newState[productIndex].PrecioUnitario = PrecioUnitario;
                updateLocalStorage(newState);
                return newState;
            }
        }

        default:
            return state
    }

}
