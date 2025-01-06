import { ingredients } from '../../data/saladData'

function SaladBuilder() {
  return (
    <div>
      {ingredients.map(ingredient => {
        return (
          <div>
            <p>Hello</p>
            <SaladItem
              key={ingredient.name}
              name={ingredient.name}
              image={ingredient.image}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SaladBuilder;