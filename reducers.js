import { combineReducers } from "redux";
import * as types from "./types";

const initialCartState = {
  cartData: [],
};
const cartReducer = (state = initialCartState, { type, payload }) => {
  switch (type) {
    case types.CART_UPDATE:
      return {
        cartData: payload,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  cart: cartReducer,
};

export default combineReducers(reducers);
