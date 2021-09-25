export const addItemToCart = (cartItems, {cartItemToAdd, quantity}) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === cartItemToAdd._id
  );
    
  if (existingCartItem) {
    console.log(existingCartItem)
    return cartItems.map(cartItem => 
      cartItem._id !== cartItemToAdd._id 
      ? cartItem
      : (cartItem.quantity + quantity) > cartItem.countInStock 
        ?
        {...cartItem, quantity: cartItem.countInStock} 
        :
        {...cartItem, quantity: cartItem.quantity + quantity}
          
    );
  }
  
  return [...cartItems, {...cartItemToAdd, quantity: quantity}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === cartItemToRemove._id
  )

  if (existingCartItem.quantity === 1){
    return cartItems.filter(
      cartItem => cartItem._id !== cartItemToRemove._id)
  }
  return cartItems.map(cartItem => 
    cartItem._id === cartItemToRemove._id
    ? {...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  );
};