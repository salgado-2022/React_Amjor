import { v4 as uuidv4 } from 'uuid';

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const newState = [
        ...state,
        {
          ...actionPayload,
          id: uuidv4(), // Genera un ID único para el producto
          quantity: 1,
          insumos: actionPayload.insumos || [],
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case 'INCREMENT_QUANTITY': {
      const productId = actionPayload;
      const newState = state.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      updateLocalStorage(newState);
      return newState;
    }
    
    case 'DECREMENT_QUANTITY': {
      const productId = actionPayload;
      const newState = state.map(product => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      updateLocalStorage(newState);
      return newState;
    }

    case 'REMOVE_TO_CART': {
      const productId = actionPayload;
      const newState = state.filter(product => product.id !== productId);
      updateLocalStorage(newState);
      return newState;
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
