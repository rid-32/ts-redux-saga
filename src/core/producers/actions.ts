import * as CONSTS from './consts';

export const fetchProducts = (): ReduxActions.BaseAction => ({
  type: CONSTS.FETCH_PRODUCTS,
});
