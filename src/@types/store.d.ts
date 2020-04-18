declare namespace Store {
  type Product = {
    id: string;
    name: string;
    price: number;
  };

  type ProdusersState = {
    products: {
      data: Core.FetchState<Product[]>;
      table: Core.TableState;
    };
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
