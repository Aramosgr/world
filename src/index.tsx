import React from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { gaUtilities } from 'utilities/GaUtilities';
import { ReactGACategories } from 'constants/appEnums';
import i18n from './i18/i18n';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
             <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
