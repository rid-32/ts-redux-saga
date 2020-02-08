import { combineReducers } from 'redux';

import * as CONSTS from './consts';
import { getFetchReducer } from 'core/utils/fetch';

export default {
  [CONSTS.ROOT_FORM_NAME]: combineReducers({
    [CONSTS.ORDERS_FROM_NAME]: getFetchReducer<Store.Order[], boolean>(
      CONSTS.ORDERS_FROM_NAME,
    ),
  }),
};
