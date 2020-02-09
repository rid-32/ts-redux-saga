import React from 'react';
import { useSelector } from 'react-redux';

import { useBindedAction } from 'utils/hooks';
import { fetchProducts as fetchProductsAction } from 'core/producers/actions';
import { getProductsFetching, getProducts } from 'core/producers/selectors';

import img from 'images/jpg/voron.jpg';

type ProductsPropsType = React.HTMLProps<HTMLElement>;

const Products: React.SFC<ProductsPropsType> = ({ className }) => {
  /* const [title, setTitle] = React.useState(''); */
  const fetchProducts = useBindedAction(fetchProductsAction);
  const isProductsFetching = useSelector(getProductsFetching);
  const products: Store.Product[] = useSelector(getProducts);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  /* const handleChange = React.useCallback( */
  /*   (event: React.ChangeEvent<HTMLInputElement>): void => { */
  /*     setTitle(event.target.value); */
  /*   }, */
  /*   [setTitle], */
  /* ); */

  return (
    <div className={className}>
      <img src={img} alt="voron-image" />

      {isProductsFetching ? (
        <h3>Загрузка...</h3>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}

      {/* <input value={title} onChange={handleChange} /> */}
    </div>
  );
};

export default Products;
