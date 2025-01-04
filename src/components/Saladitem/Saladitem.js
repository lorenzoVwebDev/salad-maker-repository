import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import Usercontext from '../User/User'

const useStyles = createUseStyles({

})
function Saladitem({
  image, name
}) {

  const user = useContext(Usercontext);

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