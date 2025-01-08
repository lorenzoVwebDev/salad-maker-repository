import { ingredients } from '../../data/saladData'
import SaladItem from "../SaladItem/SaladItem"

function SaladBuilder() {
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
        <button>Request Your Salad!</button>
      </div>
      <hr />
    </div>
  )
}

export default SaladBuilder;