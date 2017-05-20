import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import '../style/css/style.css';
import '../style/css/materialize.css';

// import redux library
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// load in app component
import App from './App';
import Board from './board';

// load in created reducers
import reducers from './reducers';

// create a store by using applyMiddleware function
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// react renders the DOM using redux middleware, rendering the App(root) component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <Route path="game" component={Board} />
      </Route>
    </Router>
  </Provider>,
document.querySelector('.container'));
registerServiceWorker();

// <Route path="signin" component={Signin} />
