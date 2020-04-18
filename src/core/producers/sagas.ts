import { fetchSaga } from 'core/utils/fetch';
import * as CONSTS from './consts';
import * as api from 'api/producers';

const fetchProductsConfig = {
  type: CONSTS.FETCH_PRODUCTS,
  apiMethod: api.fetchProducts,
};

export default function* (): ReturnType<typeof fetchSaga> {
  yield* fetchSaga<void, Store.Product[]>(fetchProductsConfig);
}
