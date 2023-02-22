import './checkout.styles.scss';
import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import CartItem from '../../components/cart-item/Cart-item.component';
import CheckoutItem from '../checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartDropdownContext);

  console.log(cartItems[1]);

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

      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ))}{' '}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
