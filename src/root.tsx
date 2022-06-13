import { App } from './components/app/app';

import './global.css';

export const Root = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Stadionuhr</title>
      </head>
      <body style="background-color: #be4d47">
        <App />
      </body>
    </html>
  );
};
