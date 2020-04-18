declare namespace StoreUtils {
  type FetchState<P> = {
    isFetching: boolean;
    isFetched: boolean;
    payload: P;
    error: string;
  };

  type TableState = {
    page: number;
    pageSize: number;
    total: number;
  };

  type FetchSagaProps<A, P> = {
    type: string;
    apiMethod(arg0: A): Promise<{ data: P }>;
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
