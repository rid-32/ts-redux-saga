import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from 'screens/home';

const App: React.SFC = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.getElementById('root'));
