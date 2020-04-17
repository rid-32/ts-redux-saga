import { fetchSaga } from 'core/utils/fetch';
import * as CONSTS from './consts';
import * as api from 'api/producers';

const fetchProductsConfig = {
  type: CONSTS.FETCH_PRODUCTS,
  apiMethod: api.fetchProducts,
  handleSuccess: (data: Store.Product[]): Store.Product[] => {
    return data;
  },
  handleError: (): boolean => {
    return true;
  },
};

export default function* (): ReturnType<typeof fetchSaga> {
  yield* fetchSaga<Store.Product[], Store.Product[], boolean, void>(
    fetchProductsConfig,
  );
}
