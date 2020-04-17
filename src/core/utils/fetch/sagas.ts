import { put, call, takeLatest } from 'redux-saga/effects';

import { getFetchActions } from './actions';

type FetchSagaReturnType<P> = (action: ReduxActions.Action<P>) => Iterator<any>;

export const getFetchSaga = <P, E>({
  type,
  apiMethod,
  handleSuccess,
  handleError,
}: StoreUtils.FetchSagaProps<P, E>): FetchSagaReturnType<P | E> => {
  const { started, success, failure } = getFetchActions<P, E>(type);

  return function*(action): any {
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

export function* fetchSaga<P, E>(
  config: StoreUtils.FetchSagaProps<P, E>,
): Generator<ReturnType<typeof takeLatest>> {
  yield takeLatest(config.type, getFetchSaga<P, E>(config));
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
  const actions = getFetchActions<P, any>(action.type);

  yield put(actions.success(action.payload));
}

export function* failureSaga<E>(
  action: ReduxActions.Action<E>,
): Iterator<ReturnType<typeof put>> {
  const actions = getFetchActions<any, E>(action.type);

  yield put(actions.failure(action.payload));
}

export function* clearSaga(
  action: ReduxActions.BaseAction,
): Iterator<ReturnType<typeof put>> {
  const actions = getFetchActions(action.type);

  yield put(actions.clear());
}
