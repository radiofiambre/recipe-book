import recipes from "../../../data/recipes";
import RecipeCard from './RecipeCard';

function RecipeList() {

  const recipeCards = recipes.map(recipe =>
    <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} category={recipe.category}/>
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

export default RecipeList