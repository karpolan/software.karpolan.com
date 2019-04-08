import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import DefaultRouter from './router/';
import { Header, Footer } from './components';

//import './bootstrap.scss';
//import 'bootstrap/dist/css/bootstrap.css';
//import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";
//import './social-icons.css';
import './social-colors.css';


const app = (
	<Router>
		<Header />
		<DefaultRouter />
		<Footer />
	</Router>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
