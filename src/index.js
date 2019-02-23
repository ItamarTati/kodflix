import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/frontend/App';
import registerServiceWorker from './frontend/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
