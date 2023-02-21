import './checkout.styles.scss';
import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import CartItem from '../../components/cart-item/Cart-item.component';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartDropdownContext);

  console.log(cartItems[1]);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <div className="" key={cartItem.id}>
          <h2>{cartItem.name}</h2>
          <span>{cartItem.quantity}</span>
          <br />
          <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
          <br />
          <span onClick={() => addItemToCart(cartItem)}> increment</span>
        </div>
      ))}{' '}
    </div>
  );
};

export default Checkout;
