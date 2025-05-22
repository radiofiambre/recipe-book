import PropTypes from "prop-types";
import createSlug from "../../../data/createSlug";

function FilterByCategory({ foodCategoriesList }) {
  const allCategories = foodCategoriesList.map((category, index) => (
    <option key={index} value={createSlug(category.name)}>
      {category.name}
    </option>
  ));

  return (
    <>
      <label htmlFor="">Categoría:</label>
      <select name="" id="">
        <option value="">Selecciona</option>
        {allCategories}
      </select>
    </>
  );
}

FilterByCategory.propTypes = {
  foodCategoriesList: PropTypes.array,
};

export default FilterByCategory;
