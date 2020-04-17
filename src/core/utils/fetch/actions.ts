import { createAction } from 'redux-actions';

import * as CONSTS from './consts';

type FetchActionsReturnType<P, E> = {
  started: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
  success: ReduxActions.ActionFunction1<P, ReduxActions.Action<P>>;
  failure: ReduxActions.ActionFunction1<E, ReduxActions.Action<E>>;
  clear: ReduxActions.ActionFunction0<ReduxActions.BaseAction>;
};

export const getFetchActions = <P, E>(
  name: string,
): FetchActionsReturnType<P, E> => ({
  started: createAction<StoreUtils.MetaType>(CONSTS.STARTED, undefined, () => ({
    name,
  })),
  success: createAction<P, StoreUtils.MetaType>(
    CONSTS.SUCCESS,
    undefined,
    () => ({
      name,
    }),
  ),
  failure: createAction<E, StoreUtils.MetaType>(
    CONSTS.FAILURE,
    undefined,
    () => ({
      name,
    }),
  ),
  clear: createAction<StoreUtils.MetaType>(CONSTS.CLEAR, undefined, () => ({
    name,
  })),
});
