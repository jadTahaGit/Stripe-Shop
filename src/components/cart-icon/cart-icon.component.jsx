import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

import {
  CartIconContainer,
  ShoppingIconStyled,
  ItemCountSpan,
} from './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpened, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleTheCartDropdown = () => setIsCartOpen(!isCartOpened);

  return (
    <CartIconContainer onClick={toggleTheCartDropdown}>
      <ShoppingIconStyled></ShoppingIconStyled>
      <ItemCountSpan>{cartCount}</ItemCountSpan>
    </CartIconContainer>
  );
};

export default CartIcon;
