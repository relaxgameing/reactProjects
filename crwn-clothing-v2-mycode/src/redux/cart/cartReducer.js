import { cartType } from "./cartTypes";

const cartInitialState = {
  isCartOpen: true,
  cartItem: [],
};

export const cartDropDownReducer = (state = cartInitialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case cartType.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case cartType.CHANGE_CART_ITEM:
      return {
        ...state,
        cartItem: payload,
      };
    case cartType.SET_CART_ITEM:
      return {
        ...state,
        cartItem: payload,
      };

    default:
      return state;
  }
};
