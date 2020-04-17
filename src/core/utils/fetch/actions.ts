import * as CONSTS from './consts';
import { createNamedAction } from '../tools';

type FetchActionsReturnType<P, E> = {
  started: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
  success: ReduxActions.ActionFunction1<P, ReduxActions.Action<P>>;
  failure: ReduxActions.ActionFunction1<E, ReduxActions.Action<E>>;
  clear: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
};

export const getFetchActions = <P, E>(
  name: string,
): FetchActionsReturnType<P, E> => ({
  started: createNamedAction(CONSTS.STARTED)(name),
  success: createNamedAction<P>(CONSTS.SUCCESS)(name),
  failure: createNamedAction<E>(CONSTS.FAILURE)(name),
  clear: createNamedAction(CONSTS.CLEAR)(name),
});
