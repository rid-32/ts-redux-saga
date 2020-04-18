export const ROOT_INSTANCE = 'producers';
export const PRODUCTS_INSTANCE = 'products';
export const TABLE_INSTANCE = 'table';
export const DATA_INSTANCE = 'data';

export const FETCH_PRODUCTS = `${ROOT_INSTANCE}@FETCH_PRODUCTS`;

export const PRODUCTS_DATA_DOMAIN = `${ROOT_INSTANCE}.${PRODUCTS_INSTANCE}.${DATA_INSTANCE}`;
export const PRODUCTS_TABLE_DOMAIN = `${ROOT_INSTANCE}.${PRODUCTS_INSTANCE}.${TABLE_INSTANCE}`;
