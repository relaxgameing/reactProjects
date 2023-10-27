import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItem
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// export const selectCartItem = (state) => state.cart.cartItem;
// export const selectIsCartOpen = (state) => state.cart.isCartOpen;
