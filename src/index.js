import React from 'react';
//import ReactDOM from 'react-dom';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

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
