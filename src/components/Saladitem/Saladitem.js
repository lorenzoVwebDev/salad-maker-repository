import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

})
function Saladitem({
  image, name
}) {
  const favourite = true;
  return (
    <div className="salad-item-wrapper">
      <h3>
        {name}
      </h3>
      <span className="salad-item-favourite" aria-label={favourite}>
        {favourite ? '😋':''}
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