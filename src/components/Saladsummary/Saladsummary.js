import React from 'react';
import { Footer } from 'flowbite-react';

function Saladsummary() {
  return (
    <footer className="salad-summary-wrapper">
      <h2>Your Salad</h2>
      <ul className="salad-summary-list">
        <li>Apple</li>
        <li>Avocado</li>
        <li>Carrots</li>
      </ul>
    </footer>
  )
}

export default Saladsummary;