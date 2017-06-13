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

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={Board}>
        // <Route path="game" component={Board} />
      </Route>
    </Router>
  </Provider>,
document.querySelector('.container'));
