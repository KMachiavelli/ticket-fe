import { combineReducers } from "redux";
import { reducer as cart } from "./cart";

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;
