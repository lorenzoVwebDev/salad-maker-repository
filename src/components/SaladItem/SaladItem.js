import { useContext, useReducer } from 'react';
import { SaladContext } from '../SaladMaker/SaladMaker';
import UserContext from '../UserContext/UserContext';

function reducer(itemsQuantity) {
  return itemsQuantity + 1
}
function SaladItem({name, image}) {
  const { salad, setSalad } = useContext(SaladContext);
  const { favourites } = useContext(UserContext);
  const [ itemsQuantity, setQuantity ] = useReducer(reducer, 0);
  const favourite = favourites.find(item => {
    return item === name
  })

  function update(type) {
    setQuantity();

    setSalad({
      actionType: type,
      item: {
        name
      }
    })
  }

  return (
    <div className="salad-item-wrapper">
      <h3>{name}</h3>
      <span>{favourite ? '😋' : ''}</span>
      <button className="item-add-button" onClick={()=> update('add')}>
        <span className="item-image" key={name}>
          {image}
        </span>
      </button>
    </div>
  )
}

export default SaladItem;