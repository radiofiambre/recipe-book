import RecipeCard from './RecipeList/RecipeCard';
import PropTypes from "prop-types"

function CategoryPage({category, recipeList}) {

  const {name} = category

  const filterRecipesByCategory = recipeList
    .filter((recipe) => recipe.categories.includes(category.name))
    .map((recipe) => 
    <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} categories={recipe.categories}/>
    )

  return (
    <section className="CategoryPage">
      <h2>{name}</h2>
      <ul className="CategoryPage_container">
        {filterRecipesByCategory}
      </ul>
    </section>
  )
}

CategoryPage.propTypes = {
  category: PropTypes.object,
  recipeList: PropTypes.array
}

export default CategoryPage