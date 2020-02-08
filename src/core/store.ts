import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
// import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const enhancers = process.env.DEVELOPMENT
  ? composeWithDevTools(middlewares)
  : middlewares;

const store: ReduxStore<Store.State> = createStore(reducers, enhancers);

// sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
