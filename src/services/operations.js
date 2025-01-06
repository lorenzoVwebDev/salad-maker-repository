
export const add = (state, item) => {
  let bool = false
  const renderState = state;
  renderState.forEach(object => {
    if (item.name === object.name) {
      return bool = true;
    }
  })
  const itemQuantity = renderState.find(value => {
    return item.name === value.name
  })?.quantity

  if (bool && itemQuantity) {
    bool = false;
    if ( itemQuantity < 2) {
      console.log('hello madame')
        item.quantity = itemQuantity + 1
      return (
        [...renderState.filter(object => {
          return object.name != item.name
        }), item]
      )
    } else {
      item.quantity = itemQuantity;
      item.maxQuantity = true;
      return (
        [...renderState.filter(object => {
          return object.name != item.name
        }), item]
      )
    }
  } else {
    item.quantity = 1;
    console.log('hello world')
      return (
        [...renderState.filter(object => {
          return object.name != item.name
        }), item] 
      )
    } 
}

export const remove = (state, item) => {
  let outputState = [];

  state.forEach(object => {
    if (object.name === item.name && object?.quantity > 0) {
      object.quantity -= 1;
    }
  })
}