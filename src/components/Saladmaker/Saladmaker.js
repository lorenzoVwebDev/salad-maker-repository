import React from 'react';
import Saladbuilder from '../Saladbuilder/Saladbuilder';

function Saladmaker() {

  return (
    <>
      <h1 className="salad-maker-wrapper">
        <span role='img' aria-label='salad'>🥗</span>
        Build Your Custom Salad!
        <span role='img' aria-label='salad'>🥗</span>
      </h1>
      <Saladbuilder/>
    </>
  )
}

export default Saladmaker;