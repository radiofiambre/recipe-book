import RecipePage_Picture from "./RecipePage/RecipePage_Picture"
import RecipePage_Info from "./RecipePage/RecipePage_Info"
import PropTypes from "prop-types"

function RecipePage({recipe}) {
  return (
    <>
      <RecipePage_Picture recipeImg={recipe.image}/>
      <RecipePage_Info recipe={recipe}/>
    </>
  )
}

RecipePage.propTypes = {
  recipe: PropTypes.object
}

export default RecipePage