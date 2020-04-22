declare namespace Store {
  type Product = {
    id: string;
    name: string;
    price: number;
  };

  type ProdusersState = {
    products: Core.DataTableState<Product[]>;
  };

  type Order = {
    id: string;
    products: Product[];
    amount: number;
  };

  type SellersState = {
    orders: Core.FetchState<Order[]>;
  };

  type State = {
    producers: ProdusersState;
    sellers: SellersState;
  };
}
