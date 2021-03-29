import React, {Component} from 'react';
import './Home.css';


class ProductCard extends Component {
    render() {
        return (
            <div class="col-sm">
                <div class="card card-block"><p>{this.props.product_name}</p></div>
            </div>
          );
    }
}
export default ProductCard;