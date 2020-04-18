import * as CONSTS from './consts';
import { getIsFetchingSelector, getPayloadSelector } from 'core/utils/fetch';

export const getProductsFetching = getIsFetchingSelector(
  CONSTS.PRODUCTS_DATA_DOMAIN,
);
export const getProducts = getPayloadSelector<Store.Product[]>(
  CONSTS.PRODUCTS_DATA_DOMAIN,
  [],
);
