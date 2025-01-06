import React, { useContext } from 'react';
import { Saladcontext } from '../Saladmaker/Saladmaker.js'

function Saladsummary() {
  const { salad } = useContext(Saladcontext);
  return (
    <div className="salad-summary-wrapper">
      <h2>Your Salad</h2>
      <ul className="salad-summary-list">
        {
          salad.map(ingredient => {
            return (
              <li key={ingredient.id}>{ingredient.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Saladsummary;