import * as types from "./types";

// SET CART
export const updateCart = (data) => {
  return (dispatch, getState) => {
    const { cartData } = getState().cart;
    if (cartData?.length > 0) {
      if (cartData.find((it) => it.id === data.id)) {
        dispatch({ type: types.CART_UPDATE, payload: cartData });
      } else {
        dispatch({ type: types.CART_UPDATE, payload: [...cartData, data] });
      }
    } else {
      dispatch({ type: types.CART_UPDATE, payload: [data] });
    }
  };
};
