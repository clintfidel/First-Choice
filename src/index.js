import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';

// import { getAllproductsAndCategory } from './actions/action';


// store.dispatch(getAllproductsAndCategory());

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
