import { get, isUndefined } from 'utils/tools';

export const createNamedReducer = <S, P>(
  reducer: ReduxActions.Reducer<S, P>,
) => (reducerName: string) => (
  state: S,
  action: ReduxActions.ActionMeta<P, StoreUtils.MetaType>,
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