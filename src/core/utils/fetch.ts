import { createAction } from 'redux-actions';
import { put, call } from 'redux-saga/effects';

import * as CONST from './consts';
import { get, isUndefined } from 'utils/tools';

type FetchActionsReturnType<P, E> = {
  started: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
  success: ReduxActions.ActionFunction1<P, ReduxActions.Action<P>>;
  failure: ReduxActions.ActionFunction1<E, ReduxActions.Action<E>>;
  clear: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
};

const fetchReducer = <P, E>(
  state: StoreUtils.FetchState<P, E> = CONST.INITIAL_FETCH_STATE,
  action: ReduxActions.ActionMeta<P | E, StoreUtils.MetaType>,
): StoreUtils.FetchState<P, E> => {
  switch (action.type) {
    case CONST.STARTED:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case CONST.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        payload: action.payload as P,
        error: null,
      };
    case CONST.FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: action.payload as E,
      };
    case CONST.CLEAR:
      return CONST.INITIAL_FETCH_STATE;
    default:
      return state;
  }
};

export const getFetchReducer = <P, E>(reducerName: string) => (
  state: StoreUtils.FetchState<P, E>,
  action: ReduxActions.ActionMeta<P | E, StoreUtils.MetaType>,
): StoreUtils.FetchState<P, E> => {
  const isInitializationCall = isUndefined(state);
  const actionName = get(action, 'meta.name');

  if (actionName !== reducerName && !isInitializationCall) return state;

  return fetchReducer<P, E>(state, action);
};

export const getFetchActions = <P, E>(
  name: string,
): FetchActionsReturnType<P, E> => ({
  started: createAction<StoreUtils.MetaType>(CONST.STARTED, undefined, () => ({
    name,
  })),
  success: createAction<P, StoreUtils.MetaType>(
    CONST.SUCCESS,
    undefined,
    () => ({
      name,
    }),
  ),
  failure: createAction<E, StoreUtils.MetaType>(
    CONST.FAILURE,
    undefined,
    () => ({
      name,
    }),
  ),
  clear: createAction<StoreUtils.MetaType>(CONST.CLEAR, undefined, () => ({
    name,
  })),
});

export const getFetchSaga = ({
  type,
  apiMethod,
  handleSuccess,
  handleError,
}: StoreUtils.FetchSagaProps) => {
  const { started, success, failure } = getFetchActions(type);

  return function*(action) {
    yield put(started());

    try {
      const response = yield call(apiMethod, action.payload);

      const handledData = handleSuccess
        ? yield* handleSuccess(response)
        : response;

      yield put(success(handledData));

      return handledData;
    } catch (error) {
      const handledError = handleError ? yield* handleError(error) : error;

      if (handledError) yield put(failure(handledError));
    }
  };
};

// export function* startedSaga(action: Store.Action<void>) {
//   const actions = getFetchActions(action.type);
//
//   yield put(actions.started());
// }
//
// export function* successSaga(action: Store.Action<any>) {
//   const actions = getFetchActions(action.type);
//
//   yield put(actions.success(action.payload));
// }
//
// export function* failureSaga(action: Store.Action<any>) {
//   const actions = getFetchActions(action.type);
//
//   yield put(actions.failure(action.payload));
// }
//
// export function* clearSaga(action: Store.Action<void>) {
//   const actions = getFetchActions(action.type);
//
//   yield put(actions.clear());
// }
