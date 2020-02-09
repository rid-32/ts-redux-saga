import { takeLatest } from 'redux-saga/effects';

import { fetchSaga } from 'core/utils/fetch';
import * as CONSTS from './consts';
import * as api from 'api/producers';

const fetchProductsConfig: StoreUtils.FetchSagaProps<
  Store.Product[],
  boolean
> = {
  type: CONSTS.FETCH_PRODUCTS,
  apiMethod: api.fetchProducts,
  handleSuccess: response => {
    return response.data;
  },
  handleError: () => {
    return true;
  },
};

export default function*(): Iterator<ReturnType<typeof fetchSaga>> {
  yield fetchSaga<Store.Product[], boolean>(fetchProductsConfig);
}
