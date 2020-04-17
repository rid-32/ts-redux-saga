declare namespace StoreUtils {
  type FetchState<P, E> = {
    isFetching: boolean;
    isFetched: boolean;
    payload: P;
    error: E;
  };

  type TableState = {
    page: number;
    pageSize: number;
    total: number;
  };

  type FetchSagaProps<D, P, E, A = void> = {
    type: string;
    apiMethod(arg0: A): Promise<{ data: D }>;
    handleSuccess?(arg0: D): P;
    handleError?(any): E;
  };

  type MetaType = {
    name: string;
  };
}

declare namespace Store {
  type Product = {
    id: string;
    name: string;
    price: number;
  };

  type ProdusersState = {
    products: {
      data: StoreUtils.FetchState<Product[], boolean>;
      table: StoreUtils.TableState;
    };
  };

  type Order = {
    id: string;
    products: Product[];
    amount: number;
  };

  type SellersState = {
    orders: StoreUtils.FetchState<Order[], boolean>;
  };

  type State = {
    producers: ProdusersState;
    sellers: SellersState;
  };
}
