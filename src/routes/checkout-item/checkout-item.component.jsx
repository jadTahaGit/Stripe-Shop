import './checkout-item.styles.scss';
import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CheckoutItem = ({ cartItem }) => {
  const { cleartItemFromCart } = useContext(CartDropdownContext);

  const clearItemHandler = () => cleartItemFromCart(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
