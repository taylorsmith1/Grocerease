import React from 'react';
import './Home.css';
import ProductCard from './ProductCard';

export default function Home() {
  return (
    <div class="container-fluid">
      <br/>
      <h4>Recently Purchased</h4>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-0 pb-0 pt-0">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <br/><br/>
      <h4>Purchase Again Soon</h4>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-0 pb-0 pt-0">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
}
// export default PurchaseList