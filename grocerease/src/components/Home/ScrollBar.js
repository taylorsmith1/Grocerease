import React, {Component} from 'react';
import './Home.css';
import ProductCard from './ProductCard';

function getItem() {
    var items = Array("Pizza Sauce", "Hashbrowns", "Dino Nuggets", "Oranges", "Ketchup", "Lemons", "Paper Plates")
    return items[items.length * Math.random() | 0];
}

function getPrice() {
    return Math.floor(Math.random() * Math.floor(20)) * Math.random();
}

class ScrollBar extends Component {
    render() {
        return (
            <div class="container-fluid custom-container mt-4 pt-3">
                <h2>{this.props.title}</h2>
                <div class="scrolling-wrapper row flex-row flex-nowrap mb-4 pb-2 pt-2">
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>
                    <ProductCard product_name={getItem()} item_description={"yummy!"} price={getPrice()}/>

                </div>
            </div>
        );
    }
}
export default ScrollBar;