import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import createSlug from "../../data/createSlug";
import foodCategoryImages from '../../assets/food_categories';

function FoodCategories({foodCategoriesList}) {

  const allCategories = foodCategoriesList.map((category, index) => (
    <Link to={`/category/${createSlug(category.name)}`} key={index}>
      <li className="FoodCategories_category" style={{ "--bg-image": `url(${foodCategoryImages[category.image]})` }}>
        <h5>{category.name}</h5>
      </li>
    </Link>
  ))

  return (
    <section className="FoodCategories pageSection">
      <h3 className="FoodCategories_title">Categorías</h3>
      <p className="FoodCategories_p">Recetas agrupadas por categorías alimenticias.</p>
      <ul className="FoodCategories_container">
        {allCategories}
      </ul>
    </section>
  )
}

FoodCategories.propTypes = {
  foodCategoriesList: PropTypes.array
}

export default FoodCategories