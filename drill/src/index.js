import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './App';
import Bomb from './Bomb';

// // import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
ReactDOM.render(<Bomb />, document.getElementById('bomb'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
