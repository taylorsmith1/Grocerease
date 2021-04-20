import React from 'react';
import './Home.css';
import ScrollBar from './ScrollBar';
import ScrollBar2 from './ScrollBar2';

export default function Home() {
  return (
    <div class="container-fluid">
      <ScrollBar title="Recently Purchased"/>
      <ScrollBar2 title="Buy Again"/> 
    </div>
  );
}