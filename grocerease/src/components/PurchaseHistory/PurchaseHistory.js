import React from 'react';
import PurchaseList from '../PurchaseList/PurchaseList';
import './PurchaseHistory.css';
import TableComponent from '../TableComponent/TableComponent'


export default function PurchaseHistory() {
  return (
    <div>
    <br/>
    <div class="container">
    <ul class="nav nav-tabs nav-custom" id="purchaseTabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active nav-item-custom" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">
          All Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-item-custom" id="other-tab" data-toggle="tab" href="#other" role="tab" aria-controls="other" aria-selected="false">
          Other</a>
      </li>
    </ul>
    </div>
    
    <div class="tab-content" id="purchaseTabsContent">
      <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab"><PurchaseList/></div>
      <div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="Other-tab"><TableComponent/></div>
  </div>
  </div>
  );
}