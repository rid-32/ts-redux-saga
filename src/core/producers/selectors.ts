import * as CONSTS from './consts';
import { getIsFetchingSelector, getPayloadSelector } from 'core/utils/fetch';

const productsPath = [CONSTS.ROOT_FORM_NAME, CONSTS.PRODUCTS_FORM_NAME];

export const getProductsFetching = getIsFetchingSelector(productsPath);
export const getProducts = getPayloadSelector<Store.Product[], []>(
  productsPath,
  [],
);
