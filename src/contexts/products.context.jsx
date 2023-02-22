import { log } from 'debug';
import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../shopdata.js';

import {
  addCollectionAndDocument,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';

//actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  // was used one Time to add the products... Usually your dont do it from the Frontend
  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
