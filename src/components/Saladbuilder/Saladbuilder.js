import { useContext, useEffect, useState } from 'react';
import { ingredients } from '../../data/saladData'
import SaladItem from "../SaladItem/SaladItem";
import { SaladContext } from '../Saladmaker/Saladmaker';
import { FetchImage } from '../CustomHooks'

function SaladBuilder() {
  const { setSaladImage, salad }  = useContext(SaladContext);
  const [ updatedsalad, setUpdatedsalad] = useState(['first']);
  const [data] = FetchImage(updatedsalad)

  useEffect(() => {
    let isMounted = true;
    console.log(updatedsalad)
    console.log(data)
    if (updatedsalad != []) setSaladImage(data);
    return () => isMounted = false;
  }, [data])

  return (
    <div className="salad-builder-wrapper">
      {ingredients.map(ingredient => {
        return (
            <SaladItem
              key={ingredient.name}
              name={ingredient.name}
              image={ingredient.image}
            />
        )
      })}
      <hr/>
      <div className="button-request-wrapper">
        <button onClick={() => {
          setUpdatedsalad(salad)
        }}>Request Your Salad!</button>
      </div>
      <hr/>
    </div>
  )
}

export default SaladBuilder;

/*   const requestImage = async (salad) =>  {
    const arrayLength = salad.length;

    let quantity = 0;
    salad.forEach(ingredient => {
      quantity+= ingredient.quantity
    })
    try {
    const response = await fetch('https://backend.lorenzo-viganego/saladimages', {
      method: "POST",
      body: JSON.stringify({
        arrayLength: arrayLength,
        quantity: quantity
      }), 
      headers: {
        "Content-Type": "application/json"}
    } );
    if (response.ok) {
      const {url} = await response.json(); 
      setSaladImage({url, quantity});
    } else {
      
      setSaladImage({responseStatus: response.status});
    }
  } catch(error) {
    console.error(error)
  }

  } */