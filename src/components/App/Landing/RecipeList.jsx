// import '../../../styles/RecipeList';
import recipes from "../../../data/recipes";
import RecipeCard from './RecipeCard';

function RecipeList() {

  const recipeCards = recipes.map(recipe =>
    <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} category={recipe.category}/>
  )

  return (
    <section className="RecipeList">
      {recipeCards}
    </section>
  )
}

export default RecipeList