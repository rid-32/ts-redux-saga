const products: Store.Product[] = [
  {
    id: '1',
    name: 'banana',
    price: 59,
  },
  {
    id: '2',
    name: 'potato',
    price: 25,
  },
  {
    id: '3',
    name: 'avocado',
    price: 81,
  },
];

export const fetchProducts = (): Promise<{ data: Store.Product[] }> =>
  new Promise((res): void => {
    setTimeout((): void => {
      res({ data: products });
    }, 2000);
  });
