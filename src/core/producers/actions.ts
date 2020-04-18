import { createAction } from 'redux-actions';

import * as CONSTS from './consts';

export const fetchProducts = createAction(CONSTS.FETCH_PRODUCTS);
