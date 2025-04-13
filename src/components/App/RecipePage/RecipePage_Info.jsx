import PropTypes from "prop-types"

function RecipePage_Info({recipe}) {

  const {name, difficulty, servings, preparationTime, ingredients, directions, isFavorite, cookedTimes} = recipe

  return (
    <div className="RecipePage_Info">
      <h2>{name}</h2>
      <h4>{preparationTime} | {servings} | {difficulty}</h4>
      <section>
        <h3>Ingredientes</h3>
        <ul>
          {ingredients.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Pasos</h3>
        <ol>
          {directions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}

RecipePage_Info.propTypes = {
  recipe: PropTypes.object
}

export default RecipePage_Info