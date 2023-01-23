import './cart-dropdown.styles.scss';
import Button from '../button/botton.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

const CartDropDown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
