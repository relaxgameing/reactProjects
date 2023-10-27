import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem, callremoveItem, callchangeQuantity }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={callchangeQuantity}>
          &#10094;
        </button>
        <span className="value"> {quantity}</span>

        <button className="arrow" onClick={callchangeQuantity} name="+">
          &#10095;
        </button>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={callremoveItem}>
        {" "}
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
