import React from 'react';
import Saladitem from '../Saladitem/Saladitem'
import { ingredients } from '../../data/saladData'

function SaladBuilder() {
  return (
    <div className="salad-builder-wrapper">
      {
        ingredients.map(ingredient => {
          return (
            <Saladitem
              key={ingredient.name}
              image={ingredient.image}
              name={ingredient.name}
            />
          )
        })
      }
    </div>
  )
}

export default Saladbuilder;