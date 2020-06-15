import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList/ProductList';
import Title from './components/Title/Title';

const itemsData = require('./products.json');

function App() {
  const data = itemsData;
  return (
    <div className="container">
      <div className="products_container">
        <Title>Список товаров</Title>
        <ProductList items={data.slice(0, 3)}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
