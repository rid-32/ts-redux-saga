declare namespace Core {
  type MetaType = {
    name: string;
  };

  type FetchState<P> = {
    isFetching: boolean;
    isFetched: boolean;
    payload: P;
    error: string;
  };

  type FetchReturnData<P> = { data: P };
  type FetchReturnType<P> = Iterator<any, P> | Promise<P>;

  type FetchSagaConfig<A, P> = {
    type: string;
    apiMethod(arg0: A): FetchReturnType<FetchReturnData<P>>;
  };

  type FetchActionsReturnType<P> = {
    started(): ReduxActions.BaseAction;
    success(arg0: P): ReduxActions.Action<P>;
    failure(arg0: string): ReduxActions.Action<string>;
    clear(): ReduxActions.BaseAction;
  };

  type IsFetchingSelector = (arg0: Store.State) => boolean;
  type IsFetchedSelector = (arg0: Store.State) => boolean;
  type PayloadSelector<P> = (arg0: Store.State) => P;
  type ErrorSelector = (arg0: Store.State) => string;

  type TableState = {
    page: number;
    pageSize: number;
    total: number;
    sort: string;
  };

  type TableActionsReturnType = {
    changePage: (arg0: number) => ReduxActions.Action<number>;
    changePageSize: (arg0: number) => ReduxActions.Action<number>;
    changeTotal: (arg0: number) => ReduxActions.Action<number>;
    changeSort: (arg0: string) => ReduxActions.Action<string>;
  };

  type TableQueryType = {
    limit: number;
    offset: number;
    sort: string;
  };

  type DataTableState<P> = {
    data: FetchState<P>;
    table: TableState;
  };

  type DataTableActionsReturnType = {
    fetch(): ReduxActions.BaseAction;
    changePage(arg0: number): ReduxActions.Action<number>;
    changePageAndFetch(arg0: number): ReduxActions.Action<number>;
    changePageSizeAndFetch(arg0: number): ReduxActions.Action<number>;
    changeSortAndFetch(arg0: string): ReduxActions.Action<string>;
  };

  type DataTableFetchReturnData<P> = FetchReturnData<{
    data: P;
    total: number;
  }>;

  type DataTableFetchReturnType<P> = FetchReturnType<
    DataTableFetchReturnData<P>
  >;

  type DataTableApiMethod<P> = (
    arg0: TableQueryType,
  ) => DataTableFetchReturnType<P>;

  type DataTableConfig<P> = {
    type: string;
    domain: string;
    apiMethod: DataTableApiMethod<P>;
  };

  type TablePageSelector = (arg0: Store.State) => number;
  type TablePageSizeSelector = (arg0: Store.State) => number;
  type TableTotalSelector = (arg0: Store.State) => number;
  type TableSortSelector = (arg0: Store.State) => string;
  type TablePagesSelector = (arg0: Store.State) => number;
  type TableQueryParamsSelector = (arg0: Store.State) => TableQueryType;
}
