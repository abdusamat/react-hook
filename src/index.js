import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import InputLazy from './components/app-simple';
import App2 from './functional-components/App';
import Products from './components/inputs/norm';
import Categories from './components/categories/Categories';
import ProductsMysql from './components/products/Products';
import * as serviceWorker from './serviceWorker';
import Form from './components/inputs/form';
import Lavr_Products from './components/inputs/norm';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<App2 />, document.getElementById('app2'));
ReactDOM.render(<ProductsMysql />, document.getElementById('app3'));
ReactDOM.render(<Categories />, document.getElementById('app4'));
ReactDOM.render(<Form />, document.getElementById('app5'));
ReactDOM.render(<InputLazy />, document.getElementById('app6'));

ReactDOM.render(<Lavr_Products />, document.getElementById('lesson'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
