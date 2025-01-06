import React, { createContext, useReducer } from 'react';
import Saladbuilder from '../Saladbuilder/Saladbuilder';
import Saladsummary from '../Saladsummary/Saladsummary';

export const Saladcontext = createContext();

function reducer(state, item) {
  return [...state, item]
}

function Saladmaker() {
  const [salad, setSalad] = useReducer(reducer, []);

  return (
    <Saladcontext.Provider value={{
      salad, setSalad
    }}>
      <h1 className="salad-maker-wrapper">
        <span role='img' aria-label='salad'>🥗</span>
        Build Your Custom Salad!
        <span role='img' aria-label='salad'>🥗</span>
      </h1>
      <Saladbuilder/>
      <Saladsummary/>
    </Saladcontext.Provider>
  )
}



export default Saladmaker;