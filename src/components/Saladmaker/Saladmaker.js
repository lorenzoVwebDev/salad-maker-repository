import React from 'react';
import Saladbuilder from '../Saladbuilder/Saladbuilder';
import Saladsummary from '../Saladsummary/Saladsummary'

function Saladmaker() {

  return (
    <>
      <h1 className="salad-maker-wrapper">
        <span role='img' aria-label='salad'>🥗</span>
        Build Your Custom Salad!
        <span role='img' aria-label='salad'>🥗</span>
      </h1>
      <Saladbuilder/>
      <Saladsummary/>
    </>
  )
}

export default Saladmaker;