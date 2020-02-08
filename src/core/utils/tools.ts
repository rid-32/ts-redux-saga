import { get } from 'utils/tools';

export const createNamedWrapperReducer = (reducerFunction, reducerName) => (
  state,
  action,
) => {
  const isInitializationCall = state === undefined;
  const name = get(action, 'meta.name');

  if (name !== reducerName && !isInitializationCall) return state;

  return reducerFunction(state, action);
};
