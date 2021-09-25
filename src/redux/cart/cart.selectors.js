import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity , 0)
);

export const selectCartSubtotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price , 0).toFixed(2)
)

export const selectCartAllPrice = createSelector(
  [selectCartSubtotal],
  cartSubtotal => ({
    subtotal: cartSubtotal,
    taxPrice: (Number(cartSubtotal) * 0.13).toFixed(2),
    shippingPrice: Number(cartSubtotal) >= 100 ? 0 : 10,
  })
)

export const selectCartTotal = createSelector(
  [selectCartAllPrice],
  ({subtotal, shippingPrice, taxPrice}) => (Number(subtotal) + Number(shippingPrice) + Number(taxPrice)).toFixed(2)
)

export const selectShippingAddress = createSelector(
  [selectCart],
  cart => cart.shippingAddress ? cart.shippingAddress : {fName:'', lName:'', phoneNumber:'', address1:'', address2:'', city:'', country:'Canada', province:'AB', postalCode:''}
)

export const selectPaymentMethod = createSelector(
  [selectCart],
  cart => cart.paymentMethod ? cart.paymentMethod : 'paypal'
)

