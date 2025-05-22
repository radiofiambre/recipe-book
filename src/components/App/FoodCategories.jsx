import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import createSlug from "../../data/createSlug";

function FoodCategories({foodCategoriesList}) {

  const allCategories = foodCategoriesList.map((category, index) => (
    <Link to={`/category/${createSlug(category.name)}`} key={index}>
      <li className="FoodCategories_category" style={{ "--bg-image": `url(${category.image})` }}>
        <p>{category.name}</p>
      </li>
    </Link>
  ))

  return (
    <section className="FoodCategories">
      <h2 className="FoodCategories_title">Categorías</h2>
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