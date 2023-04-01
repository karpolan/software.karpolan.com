import React from 'react';
import { hydrate, render } from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from './App';

const WrappedApp = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// was: ReactDOM.render(App, document.getElementById('root'));
// See https://github.com/stereobooster/react-snap for details
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(WrappedApp, rootElement);
} else {
  render(WrappedApp, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.warn);
