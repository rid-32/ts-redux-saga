const FETCH_PREFIX = 'fetch';

export const STARTED = `${FETCH_PREFIX}@STARTED`;
export const SUCCESS = `${FETCH_PREFIX}@SUCCESS`;
export const FAILURE = `${FETCH_PREFIX}@FAILURE`;
export const CLEAR = `${FETCH_PREFIX}@CLEAR`;

export const INITIAL_FETCH_STATE: StoreUtils.FetchState<null, null> = {
  isFetching: false,
  isFetched: false,
  payload: null,
  error: null,
};
