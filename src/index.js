import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList/ProductList';
import ProductHeader from './components/ProductHeader/ProductHeader';

const itemsData = require('./products.json');

function App() {
  const data = itemsData;
  return (
    <div className="container">
      <div className="container_list">
        <ProductHeader/>
        <ProductList items={data.slice(0, 3)}></ProductList>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
