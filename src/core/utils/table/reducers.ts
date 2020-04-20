import { handleActions } from 'redux-actions';

import { createNamedReducer } from '../tools';
import * as CONSTS from './consts';

const tableReducer = handleActions<Core.TableState, number | string>(
  {
    [CONSTS.CHANGE_PAGE]: (state, { payload }) => ({
      ...state,
      page: payload as number,
    }),
    [CONSTS.CHANGE_PAGE_SIZE]: (state, { payload }) => ({
      ...state,
      pageSize: payload as number,
    }),
    [CONSTS.CHANGE_TOTAL]: (state, { payload }) => ({
      ...state,
      total: payload as number,
    }),
    [CONSTS.CHANGE_SORT]: (state, { payload }) => ({
      ...state,
      sort: payload as string,
    }),
  },
  CONSTS.INITIAL_TABLE_STATE,
);

export const getTableReducer = createNamedReducer<Core.TableState, number>(
  tableReducer,
);
