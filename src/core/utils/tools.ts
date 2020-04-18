import { createAction } from 'redux-actions';

import { get, isUndefined } from 'utils/tools';

export const createNamedReducer = <S, P>(
  reducer: ReduxActions.Reducer<S, P>,
) => (reducerName: string) => (
  state: S,
  action: ReduxActions.ActionMeta<P, Core.MetaType>,
): S => {
  const isInitializationCall = isUndefined(state);
  const actionName = get(action, 'meta.name');

  if (actionName !== reducerName && !isInitializationCall) return state;

  return reducer(state, action);
};

export const createDomainSelector = <S>(domains: string[]) => (
  state: Store.State,
): S =>
  domains.reduce((acc, domain) => {
    if (typeof acc === 'object' && domain in acc) return acc[domain];

    return {};
  }, state);

export const createNamedAction = <P>(type: string) => (name: string): any => {
  return createAction(
    type,
    (payload: P): P => payload,
    () => ({
      name,
    }),
  );
};
