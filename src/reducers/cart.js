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
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            
            const newState = [
                ... state,
                {
                    ... actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_TO_CART': {
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART': {
            updateLocalStorage(cartInitialState)
            return cartInitialState
        }
    }

    return state
}
