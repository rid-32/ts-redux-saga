import { createDomainSelector } from '../tools';

export const getIsFetchingSelector = (domainPath: string) => (
  state: Store.State,
): boolean => {
  const domain = createDomainSelector<Core.FetchState<any>>(domainPath)(state);

  return domain.isFetching;
};

export const getIsFetchedSelector = (domainPath: string) => (
  state: Store.State,
): boolean => {
  const domain = createDomainSelector<Core.FetchState<any>>(domainPath)(state);

  return domain.isFetched;
};

export const getPayloadSelector = <P>(domainPath: string, defaultValue?: P) => (
  state: Store.State,
): P => {
  const domain = createDomainSelector<Core.FetchState<P>>(domainPath)(state);

  return domain.payload || defaultValue;
};

export const getErrorSelector = (domainPath: string, defaultValue?: string) => (
  state: Store.State,
): string => {
  const domain = createDomainSelector<Core.FetchState<any>>(domainPath)(state);

  return domain.error || defaultValue;
};
