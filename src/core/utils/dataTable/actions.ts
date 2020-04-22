import { createNamedAction } from '../tools';
import * as CONSTS from './consts';

export const getDataTableActions = (
  type: string,
): Core.DataTableActionsReturnType => ({
  fetch: createNamedAction(type, CONSTS.FETCH),
  changePage: createNamedAction(type, CONSTS.CHANGE_PAGE),
  changePageAndFetch: createNamedAction(type, CONSTS.CHANGE_PAGE_AND_FETCH),
  changePageSizeAndFetch: createNamedAction(
    type,
    CONSTS.CHANGE_PAGE_SIZE_AND_FETCH,
  ),
  changeSortAndFetch: createNamedAction(type, CONSTS.CHANGE_SORT_AND_FETCH),
});
