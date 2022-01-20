import React from 'react';
import { useTranslation } from 'react-i18next';

import './Home.scss';

export interface IHomeProps {}

const Home = (props: IHomeProps) => {

  return (
    <section className="home">
      <h1>home</h1>
    </section>
  );
};

export default Home;
