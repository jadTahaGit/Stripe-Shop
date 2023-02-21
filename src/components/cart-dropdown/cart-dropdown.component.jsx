import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import Button from '../button/botton.component';
import CartItem from '../cart-item/Cart-item.component';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import { Link } from 'react-router-dom';

const CartDropDown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
