import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const itemsData = require('./products.json');

function App() {
  const data = itemsData;
  return (
    <div className="container">
      <div className="container_list">
        <h1 className="header">Список товаров</h1>
        <ul className="list">
          {
            data.slice(0, 3).map(item => <li className="list_item" key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
