import * as CONSTS from './consts';
import * as fetchSelectors from 'core/utils/fetch/selectors';
import * as tableSelectors from 'core/utils/table/selectors';

const getDataDomainPath = (domainPath: string): string =>
  `${domainPath}.${CONSTS.DATA_INSTANCE}`;

const getTableDomainPath = (domainPath: string): string =>
  `${domainPath}.${CONSTS.TABLE_INSTANCE}`;

export const getIsFetchingSelector = (
  domainPath: string,
): Core.IsFetchingSelector => {
  const dataDomainPath = getDataDomainPath(domainPath);

  return fetchSelectors.getIsFetchingSelector(dataDomainPath);
};

export const getIsFetchedSelector = (
  domainPath: string,
): Core.IsFetchedSelector => {
  const dataDomainPath = getDataDomainPath(domainPath);

  return fetchSelectors.getIsFetchedSelector(dataDomainPath);
};

export const getPayloadSelector = <P>(
  domainPath: string,
  defaultValue?: P,
): Core.PayloadSelector<P> => {
  const dataDomainPath = getDataDomainPath(domainPath);

  return fetchSelectors.getPayloadSelector(dataDomainPath, defaultValue);
};

export const getErrorSelector = (domainPath: string): Core.ErrorSelector => {
  const dataDomainPath = getDataDomainPath(domainPath);

  return fetchSelectors.getErrorSelector(dataDomainPath);
};

export const getTablePageSelector = (
  domainPath: string,
): Core.TablePageSelector => {
  const tableDomainPath = getTableDomainPath(domainPath);

  return tableSelectors.getTablePageSelector(tableDomainPath);
};

export const getTablePageSizeSelector = (
  domainPath: string,
): Core.TablePageSizeSelector => {
  const tableDomainPath = getTableDomainPath(domainPath);

  return tableSelectors.getTablePageSizeSelector(tableDomainPath);
};

export const getTablePagesSelector = (
  domainPath: string,
): Core.TablePagesSelector => {
  const tableDomainPath = getTableDomainPath(domainPath);

  return tableSelectors.getTablePagesSelector(tableDomainPath);
};

export const getTableTotalSelector = (
  domainPath: string,
): Core.TableTotalSelector => {
  const tableDomainPath = getTableDomainPath(domainPath);

  return tableSelectors.getTableTotalSelector(tableDomainPath);
};

export const getTableSortSelector = (
  domainPath: string,
): Core.TableSortSelector => {
  const tableDomainPath = getTableDomainPath(domainPath);

  return tableSelectors.getTableSortSelector(tableDomainPath);
};

export const getTableQueryParamsSelector = (
  domainPath: string,
): Core.TableQueryParamsSelector => {
  const tableDomainPath = getTableDomainPath(domainPath);

  return tableSelectors.getTableQueryParamsSelector(tableDomainPath);
};
