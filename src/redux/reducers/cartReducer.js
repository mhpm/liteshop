import { CART_ADD_ITEM } from 'redux/constants/cartConstant'

export const cartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(x => x._id === item._id)

      console.log('existItem:', existItem);
        if (existItem) {
          return { ...state, cartItems: state.cartItems.map((cartItem) =>
            cartItem._id === item._id
              ?  { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )}
        }
        else
          return {...state,cartItems: [...state.cartItems, { ...item, quantity: 1 }]}

    default:
      return state
  }
}