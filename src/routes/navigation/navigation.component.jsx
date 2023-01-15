import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

import { ReactComponent as OneMJLogo } from '../../assets/1Million JOURNEY.svg';
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <OneMJLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
