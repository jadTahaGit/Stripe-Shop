import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

//actual value you want to access
export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // was used one Time to add the products... Usually your dont do it from the Frontend
  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
      // console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
