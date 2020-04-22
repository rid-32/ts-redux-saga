import { takeLatest, put, select } from 'redux-saga/effects';

import * as CONSTS from './consts';
import { getFetchSaga, FetchSagaReturnType } from 'core/utils/fetch';
import { getTableActions, getTableQueryParamsSelector } from 'core/utils/table';
import { getActionName } from 'core/utils/tools';

type TableSagasReturnType<P> = FetchSagaReturnType<
  ReturnType<Core.DataTableApiMethod<P> | typeof select | typeof put>
>;

const getTableFetchSaga = <P>(config: Core.DataTableConfig<P>) => {
  return function* (): TableSagasReturnType<P> {
    const fetchConfig: Core.FetchSagaConfig<Core.TableQueryType, P> = {
      type: config.type,
      apiMethod: config.apiMethod,
    };

    const queryParams: Core.TableQueryType = yield select(
      getTableQueryParamsSelector(config.domain),
    );
    const fetchAction: ReduxActions.Action<Core.TableQueryType> = {
      type: config.type,
      payload: queryParams,
    };

    yield getFetchSaga(fetchConfig)(fetchAction);
  };
};

const getChangePageSaga = <P>(config: Core.DataTableConfig<P>) => {
  return function* (
    action: ReduxActions.ActionMeta<number | string, Core.MetaType>,
  ): Iterator<ReturnType<typeof put>> {
    const tableActions = getTableActions(config.type);

    yield put(tableActions.changePage(action.payload as number));
  };
};

const getChangePageAndFetchSaga = <P>(config: Core.DataTableConfig<P>) => {
  return function* (
    action: ReduxActions.ActionMeta<number | string, Core.MetaType>,
  ): TableSagasReturnType<P> {
    yield getChangePageSaga(config)(action);
    yield getTableFetchSaga(config)();
  };
};

export function* dataTableSaga<P>(
  config: Core.DataTableConfig<P>,
): Generator<ReturnType<typeof takeLatest>> {
  yield takeLatest(config.type, function* (
    action: ReduxActions.ActionMeta<number | string, Core.MetaType>,
  ) {
    const actionName = getActionName(action);

    switch (actionName) {
      case CONSTS.FETCH:
        yield getTableFetchSaga(config)();
        break;
      case CONSTS.CHANGE_PAGE:
        yield getChangePageSaga(config)(action);
        break;
      case CONSTS.CHANGE_PAGE_AND_FETCH:
        yield getChangePageAndFetchSaga(config)(action);
        break;
    }
  });
}
