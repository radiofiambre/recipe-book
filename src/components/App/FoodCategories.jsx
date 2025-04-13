import PropTypes from "prop-types"

function FoodCategories({foodCategories}) {
  return (
    <section className="FoodCategories">
      <h2 className="FoodCategories_title">Categorías</h2>
      <p className="FoodCategories_p">Recetas agrupadas por categorías alimenticias.</p>
      <ul className="FoodCategories_container">
        {foodCategories.map((category, index) => (
          <li key={index} className="FoodCategories_category" style={{ "--bg-image": `url(${category.image})` }}>
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

FoodCategories.propTypes = {
  foodCategories: PropTypes.array
}

export default FoodCategories