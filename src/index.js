import React from 'react';
import ReactDOM from 'react-dom';

import {Authentication, Auth0Strategy} from '@react-access-control/authentication';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Authentication>
      <Auth0Strategy>
        <App />
      </Auth0Strategy>
    </Authentication>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
