import * as CONSTS from './consts';
import { getDataTableActions } from 'core/utils/dataTable';

export const productsTableActions = getDataTableActions(CONSTS.FETCH_PRODUCTS);
