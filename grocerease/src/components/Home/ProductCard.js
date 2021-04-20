import React, {Component} from 'react';
import './Home.css';

function formatAsDollar(f) {
    return "$" + f.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


class ProductCard extends Component {
    render() {
        return (
            <div class="col-sm">
                <div class="card card-block pt-5 pb-5 pl-4 pr-4">
                    <div class="row my-auto">
                        <div class="col-4 card image-card">
                            <img src={this.props.imgurl}></img>
                        </div>
                        <div class="col-8">
                            <h5>{this.props.product_name}</h5>
                            <p>{this.props.item_description}</p>
                            <p class="money">{formatAsDollar(this.props.price)}</p>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
export default ProductCard;