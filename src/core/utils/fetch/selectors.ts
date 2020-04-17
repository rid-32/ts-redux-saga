import { createDomainSelector } from '../tools';

export const getIsFetchingSelector = (domains: string[]) => (
  state: Store.State,
): boolean => {
  const instance = createDomainSelector<StoreUtils.FetchState<any, any>>(
    domains,
  )(state);

  return instance.isFetching;
};

export const getIsFetchedSelector = (domains: string[]) => (
  state: Store.State,
): boolean => {
  const instance = createDomainSelector<StoreUtils.FetchState<any, any>>(
    domains,
  )(state);

  return instance.isFetched;
};

export const getPayloadSelector = <P>(domains: string[], defaultValue?: P) => (
  state: Store.State,
): P => {
  const instance = createDomainSelector<StoreUtils.FetchState<P, any>>(domains)(
    state,
  );

  return instance.payload || defaultValue;
};

export const getErrorSelector = <E>(domains: string[], defaultValue?: E) => (
  state: Store.State,
): E => {
  const instance = createDomainSelector<StoreUtils.FetchState<any, E>>(domains)(
    state,
  );

  return instance.error || defaultValue;
};
