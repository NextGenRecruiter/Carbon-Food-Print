import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import axios from axios
// import { takeEvery, put } from 'redux-saga/effects'
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
// Import saga middleware
// import createSagaMiddleware from 'redux-saga';

function* rootSaga(){
    // yield takeEvery();
}

// const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        
    }),
    // Add sagaMiddleware to our store
    // applyMiddleware(sagaMiddleware),
);
// sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
