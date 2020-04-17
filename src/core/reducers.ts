import { combineReducers } from 'redux';

import { reducersMap as ProducersReducersMap } from './producers';
import { reducersMap as SellersReducersMap } from './sellers';

export default combineReducers({
  ...ProducersReducersMap,
  ...SellersReducersMap,
});
