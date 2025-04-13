import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function RecipeCard(props) {

  const {id, name, image, category} = props

  return (
    <li>
      <Link to={`/recipe/${id}`}>
      <article className="RecipeCard">
        <img className="RecipeCard_Img" alt={name} src={image}/>
        <div className="RecipeCard_textContainer">
          <p className="RecipeCard_textCategory">{category}</p>
          <h3 className="RecipeCard_textName">{name}</h3>
        </div>
      </article>
      </Link>
    </li>
  )
}

RecipeCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.array
}

export default RecipeCard