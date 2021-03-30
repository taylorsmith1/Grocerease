import React from 'react';
import './Home.css';
import ScrollBar from './ScrollBar';

export default function Home() {
  return (
    <div class="container-fluid">
      <ScrollBar title="Recently Purchased"/>
      <ScrollBar title="Buy Again"/> 
    </div>
  );
}