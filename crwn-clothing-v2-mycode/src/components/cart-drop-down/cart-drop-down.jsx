import Button from "../button/button";
import "./cart-dropdown.styles.scss";

import CartItem from "../cartitem/cartitem";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItem } from "../../redux/cart/cartSelector";

const CartDropDown = ({ hide }) => {
  const cartItem = useSelector(selectCartItem);

  return (
    <div className={`cart-dropdown-container ${hide}`}>
      <div className="cart-items">
        {cartItem.map((detail) => {
          return <CartItem key={detail.id} cartItem={detail} />;
        })}
      </div>
      <Link to="/checkOut">
        <Button title="Check Out" />
      </Link>
    </div>
  );
};

export default CartDropDown;
