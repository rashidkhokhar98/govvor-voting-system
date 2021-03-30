/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';
import './app.css';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';
//import Logo from './logo.jpg';
import Logo from '../app/images/logo1.jpg';
// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: 'rgb(79, 235, 227)' }}
          >
            <div className="container-fluid">
              <div className="navbar-header">
                <a
                  className="navbar-brand  font-weight-bold "
                  style={{ color: 'rgb(153,50,204)' }}
                  href="/"
                >
                  <img
                    src={Logo}
                    alt="Logo-img"
                    width="40"
                    height="40"
                    className="rounded-circle mr-1"
                  />
                  Govvor
                </a>
              </div>

              <div>
                <img
                  src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                  width="40"
                  height="40"
                  className="rounded-circle mr-1"
                />

                <a
                  className="btn btn-success my-2 my-sm-0  mr-2 ml-2"
                  href="/Signup"
                >
                  SignUp
                </a>
                <a className="btn btn-success my-2 my-sm-0" href="/login">
                  LogIn
                </a>
              </div>
            </div>
          </nav>
          <App />
          <footer className="footer">
            <div
              className="text-center p-3"
              style={{
                color: 'rgb(153,50,204)',
                backgroundColor: 'rgb(79, 235, 227)',
              }}
            >
              © 2021 Copyright:{' '}
              <a style={{ color: 'rgb(153,50,204)' }} href="/">
                Govvor.com
              </a>
            </div>
          </footer>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
