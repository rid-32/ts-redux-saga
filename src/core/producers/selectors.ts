import * as CONSTS from './consts';
import {
  getIsFetchingSelector,
  getPayloadSelector,
} from 'core/utils/dataTable';

export const getProductsFetching = getIsFetchingSelector(
  CONSTS.PRODUCTS_DOMAIN,
);

export const getProducts = getPayloadSelector<Store.Product[]>(
  CONSTS.PRODUCTS_DOMAIN,
  [],
);
