import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga';
import { ResizeObserver } from 'resize-observer';

import Routes from './components/Routes';
import Config from './theme/config';
import { UserContext } from '@incentivegames/ig-frontend-common/lib/contexts/userContext';
import { communicationUtilities } from '@incentivegames/ig-frontend-common/lib/utilities/communicationUtilities';

import Footer from 'components/Footer';

import './App.scss';
import './shared.scss';

interface IAppProps {}

const App = (props: IAppProps) => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      communicationUtilities.sendPostMessage.resize();
    });

    resizeObserver.observe(document.body);

    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE || '', { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search);

    userContext.user.addConfigHandlers(
      (token: string) => userContext.setToken(token),
      (language: string) => userContext.setLanguage(language),
      (currency: string) => userContext.setCurrency(currency),
    );

    if (process.env.REACT_APP_SITE_ENV !== 'dev') {
      const root = document.getElementById('root');
      if (root) root.style.overflow = 'hidden';
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Routes />
      {Config.settings.poweredByIncentiveLogo ? <Footer /> : null}
    </div>
  );
};

export default App;
