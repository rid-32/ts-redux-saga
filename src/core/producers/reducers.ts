import { combineReducers } from 'redux';

import * as CONST from './consts';
import { getFetchReducer } from 'core/utils/fetch';

export default {
  [CONST.ROOT_FORM_NAME]: combineReducers({
    [CONST.PRODUCTS_FROM_NAME]: getFetchReducer<Store.Product[], boolean>(
      CONST.PRODUCTS_FROM_NAME,
    ),
  }),
};
