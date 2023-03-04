import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Logo,
} from './navigation.styles';
import { ReactComponent as OneMJLogo } from '../../assets/1Million JOURNEY.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpened } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <OneMJLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/signin">SignIn</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
