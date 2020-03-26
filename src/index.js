import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';

const itemsData = require('./products.json');

function App() {
  return (<Container/>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
