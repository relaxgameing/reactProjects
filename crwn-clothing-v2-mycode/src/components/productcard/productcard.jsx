import Button from "../button/button";

import { addItemToCart } from "../../redux/cart/cartAction";

import "./product-card.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItem } from "../../redux/cart/cartSelector";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const cartItem = useSelector(selectCartItem);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        name="inverted"
        title="Add to Card"
        onClick={() => {
          dispatch(addItemToCart(cartItem, item));
        }}
      />
    </div>
  );
};

export default ProductCard;
