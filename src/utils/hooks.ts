import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useBindedAction = action => {
  const dispatch = useDispatch();

  return useCallback((...args) => dispatch(action(...args)), [dispatch]);
};
