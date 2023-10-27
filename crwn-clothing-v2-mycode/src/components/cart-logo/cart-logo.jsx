import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingbag.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItem,
  selectIsCartOpen,
} from "../../redux/cart/cartSelector";
import { setIsCartOpen } from "../../redux/cart/cartAction";

const CartIcon = () => {
  const cartItem = useSelector(selectCartItem);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleCartDropDown = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  const totalItemsInCart = () => {
    let count = 0;
    cartItem.forEach((el) => {
      count += el.quantity;
    });

    return count;
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropDown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItemsInCart()}</span>
    </div>
  );
};

export default CartIcon;
