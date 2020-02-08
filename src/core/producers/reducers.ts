import { combineReducers } from 'redux';

import * as CONSTS from './consts';
import { getFetchReducer } from 'core/utils/fetch';

export default {
  [CONSTS.ROOT_FORM_NAME]: combineReducers({
    [CONSTS.PRODUCTS_FORM_NAME]: getFetchReducer<Store.Product[], boolean>(
      CONSTS.FETCH_PRODUCTS,
    ),
  }),
};
