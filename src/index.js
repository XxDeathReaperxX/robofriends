import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './Card';
import { robots } from './robots';
import App from './App';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));

// <CardList robots={robots}/>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
