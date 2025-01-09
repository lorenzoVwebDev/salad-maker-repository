import { useContext } from 'react';
import { ingredients } from '../../data/saladData'
import SaladItem from "../SaladItem/SaladItem";
import { SaladContext } from '../Saladmaker/Saladmaker';

function SaladBuilder() {
  const { setSaladImage, salad }  = useContext(SaladContext);

  const requestImage = async (salad) =>  {
    const arrayLength = salad.length;

    let quantity = 0;
    salad.forEach(ingredient => {
      quantity+= ingredient.quantity
    })
    try {
    const response = await fetch('http://localhost:3500/image', {
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

  }
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
          requestImage(salad);
        }}>Request Your Salad!</button>
      </div>
      <hr/>
    </div>
  )
}

export default SaladBuilder;