import { createContext, useReducer, useState } from 'react';
import { ingredients } from '../../data/saladData'
import SaladBuilder from '../Saladbuilder/Saladbuilder';
import SaladSummary from '../Saladsummary/Saladsummary';
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
  <h1 ><span>🍎</span>Build your own salad!<span>🥦</span></h1>
  <div className="salad-maker-wrapper">
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
  </div>
  </>
)
}

export default SaladMaker;