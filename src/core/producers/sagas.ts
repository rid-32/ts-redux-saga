// import { call } from 'redux-saga/effects';

// import { fetchSaga } from 'core/utils/fetch';
import { dataTableSaga } from 'core/utils/dataTable';
import * as CONSTS from './consts';
import * as api from 'api/producers';

// function* fetchProducts(): Iterator<
//   ReturnType<typeof call>,
//   { data: Store.Product[] }
// > {
//   const response: { data: Store.Product[] } = yield call(api.fetchProducts);
//
//   return response;
// }

// const fetchProductsConfig = {
//   type: CONSTS.FETCH_PRODUCTS,
//   apiMethod: api.fetchProducts,
//   // apiMethod: fetchProducts,
// };
//
// export default function* (): ReturnType<typeof fetchSaga> {
//   yield* fetchSaga<void, Store.Product[]>(fetchProductsConfig);
// }
const productsTableConfig: Core.DataTableConfig<Store.Product[]> = {
  type: CONSTS.FETCH_PRODUCTS,
  domain: CONSTS.PRODUCTS_DOMAIN,
  apiMethod: api.fetchProducts,
};

export default function* (): Generator {
  yield* dataTableSaga(productsTableConfig);
}
