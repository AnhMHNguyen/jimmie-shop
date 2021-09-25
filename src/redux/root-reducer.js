import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer.js";
import orderReducer from "./order/order.reducer";
// import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['currentUser']
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig ,userReducer),
  cart: cartReducer,
  order: orderReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);