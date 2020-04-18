import { createDomainSelector } from '../tools';

export const getIsFetchingSelector = (domainPath: string) => (
  state: Store.State,
): boolean => {
  const instance = createDomainSelector<Core.FetchState<any>>(domainPath)(
    state,
  );

  return instance.isFetching;
};

export const getIsFetchedSelector = (domainPath: string) => (
  state: Store.State,
): boolean => {
  const instance = createDomainSelector<Core.FetchState<any>>(domainPath)(
    state,
  );

  return instance.isFetched;
};

export const getPayloadSelector = <P>(domainPath: string, defaultValue?: P) => (
  state: Store.State,
): P => {
  const instance = createDomainSelector<Core.FetchState<P>>(domainPath)(state);

  return instance.payload || defaultValue;
};

export const getErrorSelector = (domainPath: string, defaultValue?: string) => (
  state: Store.State,
): string => {
  const instance = createDomainSelector<Core.FetchState<any>>(domainPath)(
    state,
  );

  return instance.error || defaultValue;
};
