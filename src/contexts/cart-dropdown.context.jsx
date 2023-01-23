import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );

  // IF found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//actual value you want to access
export const CartDropdownContext = createContext({
  isCartOpened: false,
  setCartOpened: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpened, setCartOpened] = useState(false);
  const value = { isCartOpened, setCartOpened };
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
