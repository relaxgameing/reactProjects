import { cartType } from "./cartTypes";
import { createAction } from "../../utils/createAction";

export const setIsCartOpen = () => {
  return createAction(cartType.IS_CART_OPEN, null);
};

export const setCartItem = (newCartItem) => {
  return createAction(cartType.SET_CART_ITEM, newCartItem);
};

const addProductInCart = (cartItem, item, change) => {
  const exisitingCart = cartItem.find((current) => {
    return item.id === current.id;
  });

  if (exisitingCart) {
    const newCartItem = cartItem.map((prd) => {
      return prd.id === exisitingCart.id
        ? { ...exisitingCart, quantity: exisitingCart.quantity + change }
        : prd;
    });
    return newCartItem;
  }
  return [...cartItem, { ...item, quantity: 1 }];
};

export const addItemToCart = (cartItem, item, change = 1) => {
  return createAction(
    cartType.CHANGE_CART_ITEM,
    addProductInCart(cartItem, item, change)
  );
};
