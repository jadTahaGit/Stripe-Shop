import './cart-dropdown.styles.scss';
import Button from '../button/botton.component';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
