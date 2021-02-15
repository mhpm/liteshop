import { CART_ADD_ITEM } from 'redux/constants/cartConstant'

export const AddToCart = (product) => (dispath) =>{
  dispath({
    type: CART_ADD_ITEM,
    payload: product
  })
}