const TABLE_PREFIX = 'table';

export const PAGE = `${TABLE_PREFIX}@PAGE`;
export const PAGE_SIZE = `${TABLE_PREFIX}@PAGE_SIZE`;
export const TOTAL = `${TABLE_PREFIX}@TOTAL`;

export const INITIAL_TABLE_STATE: Core.TableState = {
  page: 0,
  pageSize: 10,
  total: 0,
};
