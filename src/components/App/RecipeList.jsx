import RecipeCard from './RecipeList/RecipeCard';
import PropTypes from "prop-types"

function RecipeList({recipeList}) {

  const allRecipes = recipeList.map(recipe =>
    <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} categories={recipe.categories}/>
  )

  return (
    <section className="RecipeList">
      <h3 className="RecipeList_title">Últimas recetas</h3>
      <p className="RecipeList_p">Encuentra las recetas que se han creado recientemente.</p>
      <ul className="RecipeList_container">
        {allRecipes}
      </ul>
    </section>
  )
}

RecipeList.propTypes = {
  recipeList: PropTypes.array
}

export default RecipeList