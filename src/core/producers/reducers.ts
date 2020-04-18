import { combineReducers } from 'redux';

import * as CONSTS from './consts';
import { getFetchReducer } from 'core/utils/fetch';
import { getTableReducer } from 'core/utils/table';

const productsReducer = combineReducers({
  [CONSTS.DATA_INSTANCE]: getFetchReducer<Store.Product[]>(
    CONSTS.PRODUCTS_DATA_DOMAIN,
  ),
  [CONSTS.TABLE_INSTANCE]: getTableReducer(CONSTS.PRODUCTS_TABLE_DOMAIN),
});

export default {
  [CONSTS.ROOT_INSTANCE]: combineReducers({
    [CONSTS.PRODUCTS_INSTANCE]: productsReducer,
  }),
};
