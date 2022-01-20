import React from 'react';
import { useTranslation } from 'react-i18next';

import './Home.scss';

export interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <h1>{t('home')}</h1>
    </section>
  );
};

export default Home;
