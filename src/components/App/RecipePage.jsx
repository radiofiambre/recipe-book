import PropTypes from "prop-types"

function RecipePage({recipe}) {

  const {image, name, difficulty, servings, preparationTime, ingredients, directions, notes, source} = recipe

  return (
    <div className="RecipePage">
      <div className="RecipePage_top">
        <section className="RecipePage_section mainInfo">
          <h2>{name}</h2>
          <h4 className="mainInfo_details">
            <span>{preparationTime}</span>|<span>{servings}</span>|<span>{difficulty}</span>
          </h4>
          <p className="mainInfo_source">Fuente: <a className="url" href="{source}">{source}</a></p>
        </section>
        <img className="image" alt="" src={image}/>
      </div>
      <div className="RecipePage_bottom">
          <section className="RecipePage_section">
            <h3>Ingredientes</h3>
            <ul>
              {ingredients.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </section>
          <section className="RecipePage_section">
            <h3>Pasos</h3>
            <ol>
              {directions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
          <section className="RecipePage_section">
            <h3>Notas</h3>
            <p>{notes}</p>
          </section>
      </div>
    </div>
  )
}

RecipePage.propTypes = {
  recipe: PropTypes.object
}

export default RecipePage