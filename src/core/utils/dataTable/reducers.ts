import { combineReducers, Reducer } from 'redux';

import * as CONSTS from './consts';
import { getFetchReducer } from 'core/utils/fetch';
import { getTableReducer } from 'core/utils/table';

export const getDataTableReducer = <P>(name: string): Reducer =>
  combineReducers({
    [CONSTS.DATA_INSTANCE]: getFetchReducer<P>(name),
    [CONSTS.TABLE_INSTANCE]: getTableReducer(name),
  });
