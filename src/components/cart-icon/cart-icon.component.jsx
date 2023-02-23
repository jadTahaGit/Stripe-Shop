import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

import {
  CartIconContainer,
  ShoppingIconStyled,
  ItemCountSpan,
} from './cart-icon.styles.jsx';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CartIcon = () => {
  const { isCartOpened, setCartOpened, cartCount } =
    useContext(CartDropdownContext);
  const toggleTheCartDropdown = () => setCartOpened(!isCartOpened);

  return (
    <CartIconContainer onClick={toggleTheCartDropdown}>
      <ShoppingIconStyled></ShoppingIconStyled>
      <ItemCountSpan>{cartCount}</ItemCountSpan>
    </CartIconContainer>
  );
};

export default CartIcon;
