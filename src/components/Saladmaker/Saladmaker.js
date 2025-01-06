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
  //console.log(totalQuantity)
  if (action.actionType === 'add') {
    if (state.length < 6 || totalQuantity < 5) {
      return add(state, action.item)
    } else {
      return state
    };
  }
} 

function SaladMaker() {
const [ salad, setSalad ] = useReducer(reducer, []);
const [ totalQuantity, setTotalQuantity] = useState();
//console.log(salad)
return (
  <>
    <h1 className="salad-maker-wrapper"><span>🍎</span>Build your own salad!<span>🥦</span></h1>
      <SaladContext.Provider 
        value={{
          salad,
          setSalad,
          setTotalQuantity,
          totalQuantity
        }}
      >
        <SaladBuilder/>
        <SaladSummary/>
      </SaladContext.Provider>
  </>
)
}

export default SaladMaker;