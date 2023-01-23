import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

import './cart-icon.styles.scss';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CartIcon = () => {
  const { isCartOpened, setCartOpened } = useContext(CartDropdownContext);
  const toggleTheCartDropdown = () => setCartOpened(!isCartOpened);

  return (
    <div className="cart-icon-container" onClick={toggleTheCartDropdown}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;