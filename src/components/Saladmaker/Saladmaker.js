import { createContext, useReducer, useState } from 'react';
import { ingredients } from '../../data/saladData'
import SaladBuilder from '../SaladBuilder/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';
import { add, remove } from '../../services/operations';

export const SaladContext = createContext()

function reducer(state, action) {
  let totalQuantity = 0;
  state.forEach(ingredient => {
    totalQuantity += ingredient?.quantity
  })

  if (action.actionType === 'add') {
    if (state.length <= 6 && totalQuantity <= 5) {
      return add(state, action.item)
    } else {
      return state
    };
  } else if (action.actionType === 'remove') {
        return remove(state, action.item)
    }

} 


function SaladMaker() {
const [ salad, setSalad ] = useReducer(reducer, []);
const [totQuantity, setTotalQuantity] = useState()
return (
  <>
    <h1 className="salad-maker-wrapper"><span>🍎</span>Build your own salad!<span>🥦</span></h1>
      <SaladContext.Provider 
        value={{
          salad,
          setSalad,
          totQuantity,
          setTotalQuantity
        }}
      >
        <SaladBuilder/>
        <SaladSummary/>
      </SaladContext.Provider>
  </>
)
}

export default SaladMaker;