import PropTypes from "prop-types"

function RecipePage({recipe}) {

  const {image, name, difficulty, servings, preparationTime, ingredients, directions, notes, source} = recipe

  return (
    <div className="RecipePage">
      <div className="RecipePage_top">
        <section className="RecipePage_section mainInfo">
          <h2>{name}</h2>
          <p className="mainInfo_details">
            <span>{preparationTime}</span>|<span>{servings}</span>|<span>{difficulty}</span>
          </p>
          {source ? <a className="mainInfo_source" href={source}>🔸 Fuente🔸</a> : null}
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
            {notes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
          </section>
      </div>
    </div>
  )
}

RecipePage.propTypes = {
  recipe: PropTypes.object
}

export default RecipePage