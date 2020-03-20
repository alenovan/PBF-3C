import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import MainReducer from './Reducers/MainReducer' ;
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreateTodo from './Containers/CreateTodo';
import Table from './Containers/Table';
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer) 
ReactDOM.render(<Provider store={store}>
    {/* <App /> */}
    <CreateTodo />
    <Table />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
 
