import PropTypes from "prop-types";

function FilterByIngredients({ ingredients, setIngredients }) {
  const handleInput = (event) => {
    setIngredients(event.target.value.toLowerCase());
  };

  return (
    <>
      <label className="filterName" htmlFor="">Ingredientes</label>
      <input
        type="text"
        value={ingredients}
        placeholder="Busca por ingredientes..."
        onChange={handleInput}
      />
    </>
  );
}

FilterByIngredients.propTypes = {
  ingredients: PropTypes.string,
  setIngredients: PropTypes.func,
};

export default FilterByIngredients;
