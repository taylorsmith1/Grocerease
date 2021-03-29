import React from 'react';
import './Home.css';
import ScrollBar from './ScrollBar';

export default function Home() {
  return (
    <div class="container-fluid">
      <br/>
      <h4>Recently Purchased</h4>
      <ScrollBar/>
      <h4>Purchase Again Soon</h4>
      <ScrollBar/>
    </div>
  );
}