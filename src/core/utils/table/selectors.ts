import { createDomainSelector } from '../tools';

export const getTablePageSelector = (domainPath: string) => (
  state: Store.State,
): number => {
  const domain = createDomainSelector<Core.TableState>(domainPath)(state);

  return domain.page;
};

export const getTablePageSizeSelector = (domainPath: string) => (
  state: Store.State,
): number => {
  const domain = createDomainSelector<Core.TableState>(domainPath)(state);

  return domain.pageSize;
};

export const getTableTotalSelector = (domainPath: string) => (
  state: Store.State,
): number => {
  const domain = createDomainSelector<Core.TableState>(domainPath)(state);

  return domain.total;
};

export const getTableSortSelector = (domainPath: string) => (
  state: Store.State,
): string => {
  const domain = createDomainSelector<Core.TableState>(domainPath)(state);

  return domain.sort;
};

export const getTablePagesSelector = (domainPath: string) => (
  state: Store.State,
): number => {
  const pageSize = getTablePageSizeSelector(domainPath)(state);
  const total = getTableTotalSelector(domainPath)(state);

  return Math.ceil(total / pageSize);
};

export const getTableQueryParamsSelector = (domainPath: string) => (
  state: Store.State,
): Core.TableQueryType => {
  const page = getTablePageSelector(domainPath)(state);
  const pageSize = getTablePageSizeSelector(domainPath)(state);
  const sort = getTableSortSelector(domainPath)(state);

  return {
    limit: pageSize,
    offset: page * pageSize,
    sort,
  };
};
