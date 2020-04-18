import { combineReducers } from 'redux';

import * as CONSTS from './consts';
import { getFetchReducer } from 'core/utils/fetch';
import { getTableReducer } from 'core/utils/table';

const productsReducer = combineReducers({
  [CONSTS.DATA_FORM_NAME]: getFetchReducer<Store.Product[]>(
    CONSTS.FETCH_PRODUCTS,
  ),
  [CONSTS.TABLE_FORM_NAME]: getTableReducer(CONSTS.PRODUCTS_TABLE),
});

export default {
  [CONSTS.ROOT_FORM_NAME]: combineReducers({
    [CONSTS.PRODUCTS_FORM_NAME]: productsReducer,
  }),
};
