import React, { Component } from 'react';

import './Header.css';

class ProductHeader extends Component {
  render() {
      return <h1 className="header">{this.props.title}</h1>
  }
}

export default ProductHeader;
