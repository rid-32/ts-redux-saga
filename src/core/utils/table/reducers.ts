import { handleActions } from 'redux-actions';

import { createNamedReducer } from '../tools';
import * as CONSTS from './consts';

const tableReducer = handleActions<StoreUtils.TableState, number>(
  {
    [CONSTS.PAGE]: (state, { payload }) => ({
      ...state,
      page: payload,
    }),
    [CONSTS.PAGE_SIZE]: (state, { payload }) => ({
      ...state,
      pageSize: payload,
    }),
    [CONSTS.TOTAL]: (state, { payload }) => ({
      ...state,
      total: payload,
    }),
  },
  CONSTS.INITIAL_TABLE_STATE,
);

export const getTableReducer = createNamedReducer<
  StoreUtils.TableState,
  number
>(tableReducer);
