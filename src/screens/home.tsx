import React from 'react';

import { greeting } from 'core/index';

import img from 'images/jpg/voron.jpg';

type HomeProps = React.HTMLProps<HTMLElement>;

const Home: React.SFC<HomeProps> = ({ className }) => {
  return (
    <div className={className}>
      <img src={img} alt="voron-image" />

      <h3>{greeting('John')}</h3>
    </div>
  );
};

export default Home;
