import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga';
import { ResizeObserver } from 'resize-observer';

import Routes from './components/Routes';

import Footer from 'components/Footer';

import './App.scss';
import './shared.scss';

interface IAppProps {}

const App = (props: IAppProps) => {

  return (
    <div className="app">
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
