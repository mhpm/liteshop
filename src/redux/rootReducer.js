import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// import all reducers here
import {
  productReducer,
  productDetailsReducer,
} from "redux/reducers/productReducer";
import {cartReducer} from 'redux/reducers/cartReducer'

//config the persistor
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)