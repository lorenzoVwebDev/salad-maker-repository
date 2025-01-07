import { useContext, useReducer, useState } from 'react';
import { SaladContext } from '../Saladmaker/Saladmaker';
import UserContext from '../Usercontext/Usercontext';

function reducer(itemsQuantity, state) {
  let totalQuantity = 0;
  state.forEach(ingredient => {
    totalQuantity += ingredient?.quantity
  })
  return itemsQuantity = totalQuantity
}
function SaladItem({name, image}) {
  const { salad, setSalad} = useContext(SaladContext);
  const [ reload, setReload ] = useState(false)
  const { favourites } = useContext(UserContext);
  const [ itemsQuantity, setQuantity ] = useReducer(reducer, 0);
  const favourite = favourites.find(item => {
    return item === name
  })

  function update(type, itemsQuantity) {
    setQuantity(salad);
    setReload(!reload)
    setSalad({
      actionType: type,
      totalQuantity: itemsQuantity,
      item: {
        name
      }
    })
  }

  return (
    <div className="salad-item-wrapper">
      <h3>{name}</h3>
      <span>{favourite ? '😋' : ''}</span>
      <button className="item-add-button" onClick={()=> update('add', itemsQuantity)}>
        <span className="item-image" key={name}>
          {image}
        </span>
      </button>
    </div>
  )
}

export default SaladItem;