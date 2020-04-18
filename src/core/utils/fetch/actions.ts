import * as CONSTS from './consts';
import { createNamedAction } from '../tools';

type FetchActionsReturnType<P> = {
  started: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
  success: ReduxActions.ActionFunction1<P, ReduxActions.Action<P>>;
  failure: ReduxActions.ActionFunction1<string, ReduxActions.Action<string>>;
  clear: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
};

export const getFetchActions = <P>(
  name: string,
): FetchActionsReturnType<P> => ({
  started: createNamedAction(CONSTS.STARTED)(name),
  success: createNamedAction<P>(CONSTS.SUCCESS)(name),
  failure: createNamedAction<string>(CONSTS.FAILURE)(name),
  clear: createNamedAction(CONSTS.CLEAR)(name),
});
