// import recipes from "../../data/recipes";
import RecipeCard from './RecipeCard';
import PropTypes from "prop-types"

function RecipeList({recipes}) {

  const recipeCards = recipes.map(recipe =>
    <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} category={recipe.category}/>
  )

  return (
    <section className="RecipeList">
      <h2 className="RecipeList_title">Últimas recetas</h2>
      <p className="RecipeList_p">Encuentra las recetas que se han creado recientemente.</p>
      <ul className="RecipeList_container">
        {recipeCards}
      </ul>
    </section>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.array
}

export default RecipeList