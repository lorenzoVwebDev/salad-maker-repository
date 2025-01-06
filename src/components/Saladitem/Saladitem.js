import React, { useContext, useReducer } from 'react';
import Usercontext from '../User/User'
import { Saladcontext } from '../Saladmaker/Saladmaker.js';

const reducer = id => id + 1;
function Saladitem({
  image, name
}) {
  const user = useContext(Usercontext);
  const { setSalad } = useContext(Saladcontext);
  const [ id, updatedId ] = useReducer(reducer, 0);

  function update() {
    setSalad({
      name,
      id: `${name}--${id}`
    })

    updatedId()
  }

  return (
    <div className="salad-item-wrapper">
      <h3>
        {name}
      </h3>
      <span className="salad-item-favourite" aria-label={user.favourites.find((favourite) => {
    return name === favourite
  })}>
        {user.favourites.includes(name) ? '😋':''}
      </span>
      <button className="item-add-buttom">
        <span className="item-image">
          {image}
        </span>
      </button>
    </div>
  )
}

export default Saladitem;