import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import configureStore from './store/configureStore';
import {fetchTodos} from './api';

fetchTodos('all').then(todos => console.log(todos));

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root')
);
