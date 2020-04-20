import * as CONSTS from './consts';
import { createNamedAction } from '../tools';

export const getTableActions = (name: string): Core.TableActionsReturnType => ({
  changePage: createNamedAction(CONSTS.CHANGE_PAGE, name),
  changePageSize: createNamedAction(CONSTS.CHANGE_PAGE_SIZE, name),
  changeTotal: createNamedAction(CONSTS.CHANGE_TOTAL, name),
  changeSort: createNamedAction(CONSTS.CHANGE_SORT, name),
});
