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

  type FetchSagaProps<P, E> = {
    type: string;
    apiMethod(any): Promise<any>;
    handleSuccess?(any): P;
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
