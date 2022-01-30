import React, { useContext, useEffect } from 'react';

import Routes from './components/Routes';

import './App.scss';
import './shared.scss';

interface IAppProps {}

const App = (props: IAppProps) => {

  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;
