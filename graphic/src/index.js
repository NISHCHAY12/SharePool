import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-kyw5p5c5rby8wml4.us.auth0.com"
  //   clientId="eM1XXUCToU5fKXGQdjgbJrgmerR4eiMP"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
    <App />
    // {/* </Auth0Provider> */}
);

