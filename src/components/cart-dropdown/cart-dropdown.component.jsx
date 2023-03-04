import { CartDropdown, EmptyMessage, CartItems } from './cart-dropdown.styles';
import { useContext } from 'react';
import Button from '../button/botton.component';
import CartItem from '../cart-item/Cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdown>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdown>
  );
};

export default CartDropDown;
