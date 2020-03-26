import React, {Component} from 'react';
import Header from '.././components/Header';
import List from '.././components/List';
import styled from './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  componentDidMount() {
    this.setState({data : itemsData});
  }

  render() {
    return (
      <div className={styled.container}>
        <div>
          <Header/>
          <List data={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default Container;
