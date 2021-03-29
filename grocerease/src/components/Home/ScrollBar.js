import React, {Component} from 'react';
import './Home.css';
import ProductCard from './ProductCard';

function getItem(num) {
    return 'Item #' + num;
}

class ScrollBar extends Component {
    render() {
        const item01 = getItem(1);
        const item02 = getItem(2);

        return (
        <div class="scrolling-wrapper row flex-row flex-nowrap mb-5 pb-2 pt-2">
            <ProductCard product_name={item01}/>
            <ProductCard product_name={item02}/>
            <ProductCard product_name={item01}/>
            <ProductCard product_name={item02}/>
            <ProductCard product_name={item01}/>
            <ProductCard product_name={item02}/>
        </div>
        );
    }
}
export default ScrollBar;