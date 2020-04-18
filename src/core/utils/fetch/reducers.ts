import { handleActions } from 'redux-actions';

import * as CONSTS from './consts';
import { createNamedReducer } from '../tools';

export const getFetchReducer = <P>(
  name: string,
): ReduxActions.Reducer<Core.FetchState<P>, P | string> => {
  type State = Core.FetchState<P>;
  type Payload = P | string;

  const fetchReducer = handleActions<State, Payload>(
    {
      [CONSTS.STARTED]: state => ({
        ...state,
        isFetching: true,
        isFetched: false,
      }),
      [CONSTS.SUCCESS]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        isFetched: true,
        payload: payload as P,
        error: null,
      }),
      [CONSTS.FAILURE]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        isFetched: true,
        error: payload as string,
      }),
      [CONSTS.CLEAR]: () => CONSTS.INITIAL_FETCH_STATE,
    },
    CONSTS.INITIAL_FETCH_STATE,
  );

  return createNamedReducer<State, Payload>(fetchReducer)(name);
};
