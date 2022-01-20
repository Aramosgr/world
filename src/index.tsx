import React from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { UserContextProvider } from '@incentivegames/ig-frontend-common/lib/contexts/UserContextProvider';
import { StorageContextProvider } from '@incentivegames/ig-frontend-common/lib/contexts/StorageContextProvider';
import { ErrorBoundary } from '@incentivegames/ig-component-common/lib/index';
import { gaUtilities } from 'utilities/GaUtilities';
import { ReactGACategories } from 'constants/appEnums';

import i18n from './theme/i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Config from './theme/config';

import './index.scss';

const onError = (error: any, info: any) => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE || '', { debug: false });

  // The Error and info vars can be both objects and string -
  // - the below logic is so we only extracts strings.
  let errorString = 'react errorBoundary - unset';
  let infoString = 'react errorBoundary - unset ';
  if (typeof error === 'string') errorString = error;
  if (typeof error.stack === 'string') errorString = error.stack;
  if (typeof info === 'string') infoString = info;
  if (typeof info.componentStack === 'string') infoString = info.stack;
  console.error(error, info);
  gaUtilities.recordEventGA(ReactGACategories.error, errorString, infoString);
};

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <StorageContextProvider storageType={Config.settings.storageType} isDevelopmentEnvironment={process.env.REACT_APP_SITE_ENV === 'dev'}>
        <UserContextProvider config={{ tokenFromParentType: Config.entry.tokenFromParentType, tokenCookieName: Config.entry.tokenCookieName }}>
          <ErrorBoundary
            onError={onError}
            wrapperBackgroundColor="#fff"
            wrapperMargin="10px"
            messagePadding="5px"
            messageTextAlign="center"
            errorTextColor="black"
            customErrorMessage={'Something has gone wrong, please try again later.'}
          >
            <App />
          </ErrorBoundary>
        </UserContextProvider>
      </StorageContextProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
