import { combineReducers } from 'redux';

import ProducersReducer from './producers/reducers';
import SellersReducer from './sellers/reducers';

export default combineReducers({
  ...ProducersReducer,
  ...SellersReducer,
});
