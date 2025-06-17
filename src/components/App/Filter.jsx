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
    <section className="Filter pageSection">
      <form className="Filter_form">
        <section className="Filter_container">
          <div className="Filter_container_eachFilter filter1">
            <FilterByName recipeName={recipeName} setRecipeName={setRecipeName} />
          </div>
          <div className="Filter_container_eachFilter filter2">
            <FilterByCategory
              foodCategoriesList={foodCategoriesList}
              setCategory={setCategory}
            />
          </div>
          <div className="Filter_container_eachFilter filter3">
            <FilterByMealTime setMealTime={setMealTime} />
          </div>
          <div className="Filter_container_eachFilter filter4">
            <FilterByDifficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </div>
          <div className="Filter_container_eachFilter filter5">
            <FilterByPrepTime prepTime={prepTime} setPrepTime={setPrepTime} />
          </div>
          <div className="Filter_container_eachFilter filter6">
            <FilterByIngredients
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </div>
          <div className="Filter_container_eachFilter filter7">
            <FilterByFavorites favorite={favorite} setFavorite={setFavorite} />
          </div>
        </section>
        <button className="Filter_button" onClick={handleReset}>Limpiar filtro</button>
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
