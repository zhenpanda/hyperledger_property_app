import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../style/css/style.css';
import '../style/css/materialize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
