import { useDispatch, useSelector } from "react-redux";

import "./checkout.styles.scss";
import CheckOutItem from "../checkout-item/checkout-item";
import { selectCartItem } from "../../redux/cart/cartSelector";
import { addItemToCart } from "../../redux/cart/cartAction";
import { setCartItem } from "../../redux/cart/cartAction";

const CheckOut = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItem);

  const changeQuantity = (event, item) => {
    if (event.target.name === "+") {
      dispatch(addItemToCart(cartItem, item));
    } else if (item.quantity > 1) {
      dispatch(addItemToCart(cartItem, item, -1));
    }
  };

  const removeItem = (item) => {
    const newCartItem = cartItem.filter((current) => {
      return current.id !== item.id;
    });
    dispatch(setCartItem(newCartItem));
  };

  const calTotal = () => {
    return cartItem.reduce((total, currentel) => {
      return total + currentel.quantity * currentel.price;
    }, 0);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItem.map((item) => {
        const callchangeQuantity = (event) => changeQuantity(event, item);
        const callremoveItem = () => removeItem(item);

        return (
          <CheckOutItem
            key={item.id}
            cartItem={item}
            callremoveItem={callremoveItem}
            callchangeQuantity={callchangeQuantity}
          />
        );
      })}

      <span className="total">Total : ${calTotal()}</span>
    </div>
  );
};

export default CheckOut;
