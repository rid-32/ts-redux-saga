import { put, takeLatest } from 'redux-saga/effects';

import { getFetchActions } from './actions';

type FetchSagaReturnType<R> = Iterator<ReturnType<typeof put> | R>;

type FetchSagaType<P, R> = (
  action: ReduxActions.Action<P>,
) => FetchSagaReturnType<R>;

export const getFetchSaga = <A, P>({
  type,
  apiMethod,
}: Core.FetchSagaConfig<A, P>): FetchSagaType<
  A,
  ReturnType<typeof apiMethod>
> => {
  const { started, success, failure } = getFetchActions<P>(type);

  return function* (action): FetchSagaReturnType<ReturnType<typeof apiMethod>> {
    yield put(started());

    try {
      const response: { data: P } = yield apiMethod(action.payload);

      yield put(success(response.data));
    } catch (error) {
      yield put(failure(error.message as string));
    }
  };
};

export function* fetchSaga<A, P>(
  config: Core.FetchSagaConfig<A, P>,
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
