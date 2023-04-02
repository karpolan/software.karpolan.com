import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppRoutes from './routes';
import { Header, Footer, Content } from './components';
import 'bootstrap/dist/css/bootstrap.css'; // Standard Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import './social-colors.css';

const App = () => (
  <BrowserRouter>
    {/* !!! Don't use any <link rel="shortcut icon"... here, it disallow changing of favicons for products !!! */}
    <Helmet>
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="Web application for software.karpolan.com" />
      <meta name="application-name" content="Web application for software.karpolan.com" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-233234-10"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-233234-10');
      `}</script>
    </Helmet>

    <Header />
    <Content>
      <AppRoutes />
    </Content>
    <Footer />
  </BrowserRouter>
);

export default App;
