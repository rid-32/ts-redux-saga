import React from 'react';

import { useBindedAction } from 'utils/hooks';
import { fetchProducts as fetchProductsAction } from 'core/producers/actions';

export const useProductsFetchingEffect = (): void => {
  const fetchProducts = useBindedAction(fetchProductsAction);

  React.useEffect(() => {
    fetchProducts();
  }, []);
};
