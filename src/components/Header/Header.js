import React, {Component} from 'react';
import styled from './Header.css'

clas Header extends Component {
  render() {
    return (
      <h1 className = {styled.h1_styled}>Список товаров</h1>
    )
  }
}

export default Header;
