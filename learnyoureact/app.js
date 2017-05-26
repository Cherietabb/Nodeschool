import React from 'react';
import ReactDom from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDom.render(<TodoBox />, document.getElementById("app"));
