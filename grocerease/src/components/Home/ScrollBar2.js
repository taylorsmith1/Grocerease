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

class ScrollBar2 extends Component {
    render() {
        return (
            <div class="container-fluid custom-container mt-4 pt-3">
                <h2>{this.props.title}</h2>
                <div class="scrolling-wrapper row flex-row flex-nowrap mb-4 pb-2 pt-2">
                    <ProductCard imgurl={"https://i5.walmartimages.com/asr/ea02745f-85ec-4437-b558-99017aa55ba0_1.54e4ccd90fb051e0422baf290b61d661.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"}
                    product_name={"Lemons"} item_description={"Bright, tart flavor!"} price={getPrice()}/>
                    <ProductCard imgurl={"https://i5.walmartimages.com/asr/8990d3bc-46fc-46ad-a03c-41b3b4ab3046.70f5419ff8f28648ade9fd6642835567.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"}
                    product_name={"Hashbrowns"} item_description={"Tastes like home."} price={getPrice()}/>
                    <ProductCard imgurl={"https://i5.walmartimages.com/asr/be120f26-870a-43eb-b066-b19391ac5936_1.d749041cf47d13735d3d790dca85da32.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"}
                    product_name={"Paper Plates"} item_description={"Our Sturdiest Yet!"} price={getPrice()}/>
                    <ProductCard imgurl={"https://i5.walmartimages.com/asr/35e5e43b-d7f7-4c05-ad55-d2df5404c1cd_1.8a8b9be88694f526967d6d5b24c78bae.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"}
                    product_name={"Pizza Sauce"} item_description={""} price={getPrice()}/>
                    <ProductCard imgurl={"https://i5.walmartimages.com/asr/04ae3236-95c2-41d9-bdbc-d63f59ad6780.3d088fc8feae0297ce448d169dfed3fd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"}
                    product_name={"Ketchup"} item_description={"Serve with fries."} price={getPrice()}/>                 
                </div>
            </div>
        );
    }
}
export default ScrollBar2;