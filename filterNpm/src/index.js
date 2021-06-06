import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const list = ['привет', 'пока', 'здравствуй', 'досвидания', 'день', 'ночь', 'полдень'];

ReactDOM.render(
  <React.StrictMode>
    <App list={list} />
  </React.StrictMode>,
  document.getElementById('root')
);


