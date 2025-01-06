import { createContext, useReducer } from 'react';
import { ingredients } from '../../data/saladData'
import SaladBuilder from '../SaladBuilder/SaladBuilder';

export const SaladContext = createContext()

function reducer(state, item) {
  return [...state, item];
} 

function SaladMaker() {
const [ salad, setSalad ] = useReducer(reducer, []);  

return (
  <SaladContext.Provider 
    value={{
      salad,
      setSalad
    }}
  >
    <SaladBuilder/>
    </SaladContext.Provider>
)
}

export default SaladMaker;