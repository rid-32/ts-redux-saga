import { put, call, takeLatest } from 'redux-saga/effects';

import { getFetchActions } from './actions';

type FetchSagaReturnType<P> = (action: ReduxActions.Action<P>) => Iterator<any>;

export const getFetchSaga = <A, P>({
  type,
  apiMethod,
}: StoreUtils.FetchSagaProps<A, P>): FetchSagaReturnType<A> => {
  const { started, success, failure } = getFetchActions<P>(type);

  return function* (action): any {
    yield put(started());

    try {
      const response: { data: P } = yield call(apiMethod, action.payload);

      yield put(success(response.data));
    } catch (error) {
      yield put(failure(error.message));
    }
  };
};

export function* fetchSaga<A, P>(
  config: StoreUtils.FetchSagaProps<A, P>,
): Generator<ReturnType<typeof takeLatest>> {
  yield takeLatest(config.type, getFetchSaga<A, P>(config));
}

export function* startedSaga(
  action: ReduxActions.BaseAction,
): Iterator<ReturnType<typeof put>> {
  const actions = getFetchActions(action.type);

  yield put(actions.started());
}

export function* successSaga<P>(
  action: ReduxActions.Action<P>,
): Iterator<ReturnType<typeof put>> {
  const actions = getFetchActions<P>(action.type);

  yield put(actions.success(action.payload));
}

export function* failureSaga(
  action: ReduxActions.Action<string>,
): Iterator<ReturnType<typeof put>> {
  const actions = getFetchActions<any>(action.type);

  yield put(actions.failure(action.payload));
}

export function* clearSaga(
  action: ReduxActions.BaseAction,
): Iterator<ReturnType<typeof put>> {
  const actions = getFetchActions(action.type);

  yield put(actions.clear());
}
