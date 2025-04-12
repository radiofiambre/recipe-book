// import '../../../styles/RecipeCard';
import PropTypes from "prop-types"

function RecipeCard(props) {
  return (
    <article className="RecipeCard">
      <img className="RecipeCard_Img" alt={props.name} src={props.image}/>
      <div className="RecipeCard_textContainer">
        <p className="RecipeCard_textCategory">{props.category}</p>
        <h3 className="RecipeCard_textName">{props.name}</h3>
      </div>
    </article>
  )
}

RecipeCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string
}

export default RecipeCard