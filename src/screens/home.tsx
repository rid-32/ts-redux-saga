import * as React from 'react';

import { greeting } from 'core/index';

const Home: React.SFC = () => {
  return <h3>{greeting('John')}</h3>;
};

export default Home;
