import * as CONSTS from './consts';
import { getIsFetchingSelector, getPayloadSelector } from 'core/utils/fetch';

export const getOrdersFetching = getIsFetchingSelector(CONSTS.ORDERS_DOMAIN);
export const getOrders = getPayloadSelector<Store.Order[]>(
  CONSTS.ORDERS_DOMAIN,
  [],
);
