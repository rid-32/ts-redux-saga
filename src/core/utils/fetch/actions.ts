import * as CONSTS from './consts';
import { createNamedAction } from '../tools';

export const getFetchActions = <P>(
  name: string,
): Core.FetchActionsReturnType<P> => ({
  started: createNamedAction(CONSTS.STARTED)(name),
  success: createNamedAction<P>(CONSTS.SUCCESS)(name),
  failure: createNamedAction<string>(CONSTS.FAILURE)(name),
  clear: createNamedAction(CONSTS.CLEAR)(name),
});
