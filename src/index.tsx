import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'core/store';

import Products from 'screens/products';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
