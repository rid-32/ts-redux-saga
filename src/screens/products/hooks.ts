import React from 'react';

import { useBindedAction } from 'utils/hooks';
import { productsTableActions } from 'core/producers/actions';

export const useProductsFetchingEffect = (): void => {
  const fetchProducts = useBindedAction(productsTableActions.fetch);

  React.useEffect(() => {
    fetchProducts();
  }, []);
};
