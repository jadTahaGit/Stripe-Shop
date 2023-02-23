import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as OneMJLogo } from '../../assets/1Million JOURNEY.svg';

export const NavigationContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 20px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100px;
`;

export const Logo = styled(OneMJLogo)`
  width: 80px;
  height: auto;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
`;
