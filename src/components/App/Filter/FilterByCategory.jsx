import PropTypes from "prop-types";

function FilterByCategory({ foodCategoriesList, setCategory }) {
  const allCategories = foodCategoriesList.map((category, index) => (
    <option key={index} value={category.name}>
      {category.name}
    </option>
  ));

  const handleSelect = (event) => setCategory(event.target.value)

  return (
    <>
      <label htmlFor="">Categoría:</label>
      <select name="" id="" onChange={handleSelect}>
        <option value="">Selecciona</option>
        {allCategories}
      </select>
    </>
  );
}

FilterByCategory.propTypes = {
  foodCategoriesList: PropTypes.array,
  setCategory: PropTypes.category
};

export default FilterByCategory;
