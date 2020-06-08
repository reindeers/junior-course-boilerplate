import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import './ProductList.css';

const ratingComponent = ({ isFilled }) => {
  return <span className={!isFilled ? '' : 'star_fill'}>☆</span>
};

const SubPriceComponent = props => <span className="subprice">{props.children}</span>
const PriceComponent = props => <span className="price">{props.children}</span>

const MAX_RATING = 5;

class ProductList extends Component {
  render(){
    const items = this.props.items;
    return (
      <div className="products_list">
        {items.map(item =>
          <ProductItem
            className="product_item"
            key={item.id}
            isInStock={item.inStock}
            img={item.img}
            title={item.name}
            price={<PriceComponent>{item.price} ₽</PriceComponent>}
            subPriceContent={<SubPriceComponent>{`${item.subPrice} ${item.subPrice ? '₽' : ''}`}</SubPriceComponent>}
            maxRating={MAX_RATING}
            rating={item.rating}
            ratingComponent={ratingComponent}
          />
        )}
      </div>
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
