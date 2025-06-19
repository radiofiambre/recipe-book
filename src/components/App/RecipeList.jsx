import RecipeCard from "./RecipeList/RecipeCard";
import PropTypes from "prop-types";

function RecipeList({ recipeList }) {
  return (
    <section className="RecipeList pageSection">
      {recipeList.length === 0 ? (
        <p className="recipeNotFoundMessage">
          No se han encontrado recetas.
        </p>
      ) : (
        <ul className="RecipeList_container">
          {recipeList.map((recipe) => (
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

RecipeList.propTypes = {
  recipeList: PropTypes.array,
};

export default RecipeList;
