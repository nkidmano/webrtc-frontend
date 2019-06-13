import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import 'bulma/css/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
