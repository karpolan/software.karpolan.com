import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const WrappedApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

// was: ReactDOM.render(App, document.getElementById('root'));
// See https://github.com/stereobooster/react-snap for details
const rootElement = document.getElementById('root');
let root;
if (rootElement.hasChildNodes()) {
  root = ReactDOMClient.hydrateRoot(rootElement, <WrappedApp />);
} else {
  root = ReactDOMClient.createRoot(rootElement);
}
root.render(<WrappedApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
