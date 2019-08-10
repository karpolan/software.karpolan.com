import React from 'react';
//import ReactDOM from 'react-dom';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import * as serviceWorker from './serviceWorker';
import DefaultRouter from './router';
import { Header, Footer, Content } from './components';

// import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; // Standard Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import './social-colors.css';

const App = (
  <Router>
    <Header />
    <Content>
      <DefaultRouter />
    </Content>
    <Footer />
    {/* !!! Don't use any <link rel="shortcut icon"... here, it disallow changing of favicons for products !!! */}
    <Helmet>
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link _rel="shortcut icon" href="/favicon.ico" />
      <link _rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link _rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="Web application for software.karpolan.com" />
      <meta name="application-name" content="Web application for software.karpolan.com" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  </Router>
);

// was: ReactDOM.render(App, document.getElementById('root'));
// See https://github.com/stereobooster/react-snap for details
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(App, rootElement);
} else {
  render(App, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
