import { categoryMapReducer } from "./category/categoryReducer";
import { userReducer } from "./user/userReducer";
import { cartDropDownReducer } from "./cart/cartReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryMapReducer,
  cart: cartDropDownReducer,
});
