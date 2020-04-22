import { combineReducers } from 'redux';

import * as CONSTS from './consts';
import { getDataTableReducer } from 'core/utils/dataTable';

export default {
  [CONSTS.ROOT_INSTANCE]: combineReducers({
    [CONSTS.PRODUCTS_INSTANCE]: getDataTableReducer<Store.Product[]>(
      CONSTS.FETCH_PRODUCTS,
    ),
  }),
};
