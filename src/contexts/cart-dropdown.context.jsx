import { createContext, useState } from 'react';

//actual value you want to access
export const CartDropdownContext = createContext({
  isCartOpened: false,
  setCartOpened: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpened, setCartOpened] = useState(false);
  const value = { isCartOpened, setCartOpened };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
