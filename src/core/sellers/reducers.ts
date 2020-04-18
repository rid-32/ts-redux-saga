import { combineReducers } from 'redux';

import * as CONSTS from './consts';
import { getFetchReducer } from 'core/utils/fetch';

export default {
  [CONSTS.ROOT_INSTANCE]: combineReducers({
    [CONSTS.ORDERS_INSTANCE]: getFetchReducer<Store.Order[]>(
      CONSTS.ORDERS_INSTANCE,
    ),
  }),
};
