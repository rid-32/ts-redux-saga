import { createAction } from 'redux-actions';
import { put, call, takeLatest } from 'redux-saga/effects';

import * as CONSTS from './consts';
import { get, isUndefined } from 'utils/tools';

type FetchActionsReturnType<P, E> = {
  started: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
  success: ReduxActions.ActionFunction1<P, ReduxActions.Action<P>>;
  failure: ReduxActions.ActionFunction1<E, ReduxActions.Action<E>>;
  clear: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
};

const fetchReducer = <P, E>(
  state: StoreUtils.FetchState<P, E> = CONSTS.INITIAL_FETCH_STATE,
  action: ReduxActions.ActionMeta<P | E, StoreUtils.MetaType>,
): StoreUtils.FetchState<P, E> => {
  switch (action.type) {
    case CONSTS.STARTED:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case CONSTS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        payload: action.payload as P,
        error: null,
      };
    case CONSTS.FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: action.payload as E,
      };
    case CONSTS.CLEAR:
      return CONSTS.INITIAL_FETCH_STATE;
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
  started: createAction<StoreUtils.MetaType>(CONSTS.STARTED, undefined, () => ({
    name,
  })),
  success: createAction<P, StoreUtils.MetaType>(
    CONSTS.SUCCESS,
    undefined,
    () => ({
      name,
    }),
  ),
  failure: createAction<E, StoreUtils.MetaType>(
    CONSTS.FAILURE,
    undefined,
    () => ({
      name,
    }),
  ),
  clear: createAction<StoreUtils.MetaType>(CONSTS.CLEAR, undefined, () => ({
    name,
  })),
});

export const getFetchSaga = <P, E>({
  type,
  apiMethod,
  handleSuccess,
  handleError,
}: StoreUtils.FetchSagaProps<P, E>) => {
  const { started, success, failure } = getFetchActions<P, E>(type);

  return function*(action) {
    yield put(started());

    try {
      const response = yield call(apiMethod, action.payload);

      const handledData = handleSuccess
        ? yield handleSuccess(response)
        : response.data;

      if (handledData) yield put(success(handledData));

      return handledData;
    } catch (error) {
      const handledError = handleError ? yield handleError(error) : error;

      if (handledError) yield put(failure(handledError));
    }
  };
};

export function* fetchSaga<P, E>(config: StoreUtils.FetchSagaProps<P, E>) {
  yield takeLatest(config.type, getFetchSaga<P, E>(config));
}

export const getDomainSelector = <P, E>(domains: string[]) => (
  state: Store.State,
): StoreUtils.FetchState<P, E> =>
  domains.reduce((acc, domain) => {
    if (typeof acc === 'object' && domain in acc) return acc[domain];

    return {};
  }, state);

export const getIsFetchingSelector = (domains: string[]) => (
  state: Store.State,
): boolean => {
  const instanse = getDomainSelector(domains)(state);

  return instanse.isFetching;
};

export const getIsFetchedSelector = (domains: string[]) => (
  state: Store.State,
): boolean => {
  const instanse = getDomainSelector(domains)(state);

  return instanse.isFetched;
};

export const getPayloadSelector = <P, D>(
  domains: string[],
  defaultValue?: D,
) => (state: Store.State): P | D => {
  const instanse = getDomainSelector<P, any>(domains)(state);

  return instanse.payload || defaultValue;
};

export const getErrorSelector = <E, D>(domains: string[], defaultValue?: D) => (
  state: Store.State,
): E | D => {
  const instanse = getDomainSelector<any, E>(domains)(state);

  return instanse.error || defaultValue;
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
