import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const json = require('./resume.json');
ReactDOM.render(
  <App resumeJson={json}/>,
  document.getElementById('root')
);
