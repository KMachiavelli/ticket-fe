import { combineReducers } from "redux";
import { reducer as cart } from "./cart";
import { reducer as tickets } from "./tickets";
import { reducer as auth } from "./auth";

const rootReducer = combineReducers({
  cart,
  tickets,
  auth,
});

export default rootReducer;
