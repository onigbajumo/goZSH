import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Body from './component/Body'
import Gozsh from './component/Gozsh';
import Sidebar from './component/Sidebar';
import Direction from './component/Direction';
import City from './component/City';
import State from './component/State';
import Travel from './component/Travel';
import Router from './Router';
import Slider from './component/Slider';



ReactDOM.render(<Router />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
