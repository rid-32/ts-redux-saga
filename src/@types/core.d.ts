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

  type FetchSagaProps<A, P> = {
    type: string;
    apiMethod(arg0: A): Iterator<any, { data: P }> | Promise<{ data: P }>;
  };

  type FetchActionsReturnType<P> = {
    started: () => ReduxActions.BaseAction;
    success: (arg0: P) => ReduxActions.Action<P>;
    failure: (arg0: string) => ReduxActions.Action<string>;
    clear: () => ReduxActions.BaseAction;
  };

  type TableState = {
    page: number;
    pageSize: number;
    total: number;
  };
}
