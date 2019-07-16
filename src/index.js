import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Clock1 from './Clock1';
//import Collapse from './Collapse';
//import Another from './Another';
import Data from './Data';
import LifeCycle from './LifeCycle';
import Method from './Method';
import SignUp from './signUp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <SignUp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
