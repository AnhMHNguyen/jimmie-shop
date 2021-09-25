import { CartActionTypes } from "./cart.types";


export const addItem = itemAndQuantity => ({
  type: CartActionTypes.ADD_ITEM,
  payload: itemAndQuantity
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const saveShippingAddress = address => ({
  type: CartActionTypes.SAVE_SHIPPING_ADDRESS,
  payload: address
}); 

export const savePaymentMethod = method => ({
  type: CartActionTypes.SAVE_PAYMENT_METHOD,
  payload: method
})