import React, {Component} from 'react';
import styled from './List.css';
import ProductItem from 'csssr-school-product-card';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};

class List extends Component {
  render() {
    return (
      <ul className = {styled.list}>
        {
          this.props.data.filter(item => item.id < 4).map(item =>
            <ProductItem
              isInStock={true}
              img="http://moem-mebel.ru/content/images/thumbs/0000951_stol-favorit-2.jpeg"
              title={item.name}
              price="3 000"
              subPriceContent="4 000"
              maxRating={5}
              rating={4}
              ratingComponent={ratingComponent}
            />
          )
        }
      </ul>
    )
  }
}
