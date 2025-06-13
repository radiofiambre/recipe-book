import PropTypes from "prop-types";

function FilterByCategory({ foodCategoriesList, setCategory }) {
  const allCategories = foodCategoriesList.map((categoryData, index) => (
    <option key={index} value={categoryData.name}>
      {categoryData.name}
    </option>
  ));

  const handleSelect = (event) => setCategory(event.target.value);

  return (
    <>
      <label htmlFor="">Categoría:</label>
      <select name="" defaultValue="all" onChange={handleSelect}>
        <option value="all">Todas</option>
        {allCategories}
      </select>
    </>
  );
}

FilterByCategory.propTypes = {
  foodCategoriesList: PropTypes.array,
  setCategory: PropTypes.func,
};

export default FilterByCategory;
