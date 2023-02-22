import './checkout-item.styles.scss';
import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CheckoutItem = ({ cartItem }) => {
  const { cleartItemFromCart, addItemToCart, decrementItemFromCart } =
    useContext(CartDropdownContext);

  const incrementCartItemHandler = () => addItemToCart(cartItem);
  const decrementCartItemHandler = () => decrementItemFromCart(cartItem);

  const clearItemHandler = () => cleartItemFromCart(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={decrementCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementCartItemHandler}>
          &#10095;
        </div>
      </div>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
