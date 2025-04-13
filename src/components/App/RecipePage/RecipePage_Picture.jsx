import PropTypes from "prop-types"

function RecipePage_Picture({recipeImg}) {
  return (
    <img className="RecipePage_Picture_image" alt="" src={recipeImg}/>
  )
}

RecipePage_Picture.propTypes = {
  recipeImg: PropTypes.string
}

export default RecipePage_Picture