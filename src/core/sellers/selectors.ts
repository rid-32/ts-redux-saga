import * as CONSTS from './consts';
import { getIsFetchingSelector, getPayloadSelector } from 'core/utils/fetch';

const ordersPath = [CONSTS.ROOT_FORM_NAME, CONSTS.ORDERS_FROM_NAME];

export const getOrdersFetching = getIsFetchingSelector(ordersPath);
export const getOrders = getPayloadSelector<Store.Order[], []>(ordersPath, []);
