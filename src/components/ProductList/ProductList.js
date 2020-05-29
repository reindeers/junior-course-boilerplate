import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';

const ratingComponent = ({ isFilled }) => {
  return <div className={!isFilled ? '' : 'starFill'} />;
};

const MAX_RATING = 5;

class ProductList extends Component {
  render(){
    const items = this.props.items;
    return (
      <>
        {items.map(item =>
          <ProductItem
            key={item.id}
            isInStock={item.inStock}
            img={item.img}
            title={item.name}
            price={item.price}
            subPriceContent={item.subPrice}
            maxRating={MAX_RATING}
            rating={item.rating}
            ratingComponent={ratingComponent}
          />
        )}
      </>
    )
  }
}

ProductList.propTypes = {
  items: PropTypes.array
}
ProductList.defaultProps = {
  items: []
}

export default ProductList;
