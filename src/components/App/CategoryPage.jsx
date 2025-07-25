import RecipeCard from "./RecipeList/RecipeCard";
import PropTypes from "prop-types";

function CategoryPage({ category, recipeList }) {
  const { name } = category;

  const filteredRecipesByCategory = recipeList
  .filter((recipe) =>
    recipe.categories.includes(category.name)
  )
  .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="CategoryPage">
      <h2>{name}</h2>
      {filteredRecipesByCategory.length === 0 ? (
        <p className="recipeNotFoundMessage">No se han encontrado recetas.</p>
      ) : (
        <ul className="RecipeList_container">
          {filteredRecipesByCategory.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
              prepTime={recipe.preparationTime}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

CategoryPage.propTypes = {
  category: PropTypes.object,
  recipeList: PropTypes.array,
};

export default CategoryPage;
