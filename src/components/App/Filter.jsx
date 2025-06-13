import FilterByName from "./Filter/FilterByName";
import FilterByCategory from "./Filter/FilterByCategory";
import FilterByMealTime from "./Filter/FilterByMealTime";
import FilterByDifficulty from "./Filter/FilterByDifficulty";
import FilterByPrepTime from "./Filter/FilterByPrepTime";
import FilterByIngredients from "./Filter/FilterByIngredients";
import FilterByFavorites from "./Filter/FilterByFavorites";

import PropTypes from "prop-types";

function Filter(props) {
  const {
    foodCategoriesList,
    recipeName,
    setRecipeName,
    setCategory,
    setMealTime,
    difficulty,
    setDifficulty,
    prepTime,
    setPrepTime,
    ingredients,
    setIngredients,
    favorite,
    setFavorite,
  } = props;

  const handleReset = () => {
    setRecipeName("");
    setCategory("all");
    setMealTime("all");
    setDifficulty("all");
    setPrepTime("all");
    setIngredients("");
    setFavorite("all");
  }

  return (
    <section className="Filter">
      <h2 className="Filter_title">Búsqueda de recetas</h2>
      <p className="Filter_p">
        Encuentra sugerencias para cocinar según categorías, ingredientes o
        tiempo de preparación.
      </p>
      <form action="">
        <div className="Filter_container">
          <FilterByName recipeName={recipeName} setRecipeName={setRecipeName} />
        </div>
        <div className="Filter_container">
          <FilterByCategory
            foodCategoriesList={foodCategoriesList}
            setCategory={setCategory}
          />
        </div>
        <div className="Filter_container">
          <FilterByMealTime setMealTime={setMealTime} />
        </div>
        <div className="Filter_container">
          <FilterByDifficulty
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>
        <div className="Filter_container">
          <FilterByPrepTime prepTime={prepTime} setPrepTime={setPrepTime} />
        </div>
        <div className="Filter_container">
          <FilterByIngredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </div>
        <div className="Filter_container">
          <FilterByFavorites favorite={favorite} setFavorite={setFavorite} />
        </div>
        <button onClick={handleReset}>Limpiar filtro</button>
      </form>
    </section>
  );
}

Filter.propTypes = {
  foodCategoriesList: PropTypes.array,
  recipeName: PropTypes.string,
  setRecipeName: PropTypes.func,
  setCategory: PropTypes.func,
  setMealTime: PropTypes.func,
  difficulty: PropTypes.string,
  setDifficulty: PropTypes.func,
  prepTime: PropTypes.string,
  setPrepTime: PropTypes.func,
  ingredients: PropTypes.string,
  setIngredients: PropTypes.func,
  favorite: PropTypes.string,
  setFavorite: PropTypes.func,
};

export default Filter;
