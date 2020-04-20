const TABLE_PREFIX = 'table';

export const CHANGE_PAGE = `${TABLE_PREFIX}@CHANGE_PAGE`;
export const CHANGE_PAGE_SIZE = `${TABLE_PREFIX}@CHANGE_PAGE_SIZE`;
export const CHANGE_TOTAL = `${TABLE_PREFIX}@CHANGE_TOTAL`;
export const CHANGE_SORT = `${TABLE_PREFIX}@CHANGE_SORT`;

export const INITIAL_TABLE_STATE: Core.TableState = {
  page: 0,
  pageSize: 10,
  total: 0,
  sort: null,
};
