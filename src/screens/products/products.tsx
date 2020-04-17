import React from 'react';
import { useSelector } from 'react-redux';

import { getProductsFetching, getProducts } from 'core/producers/selectors';
import { useProductsFetchingEffect } from './hooks';

import img from 'images/jpg/voron.jpg';

type ProductsPropsType = React.HTMLProps<HTMLElement>;

const Products: React.SFC<ProductsPropsType> = ({ className }) => {
  const isProductsFetching = useSelector(getProductsFetching);
  const products = useSelector(getProducts);

  useProductsFetchingEffect();

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
    </div>
  );
};

export default Products;
