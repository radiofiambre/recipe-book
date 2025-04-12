// import '../../../styles/FoodCategories';
import categoriesList from "../../../data/foodCategories";

function FoodCategories() {
  return (
    <section className="FoodCategories">
      <ul className="FoodCategories_list">
        {categoriesList.map((category, index) => (
          <li key={index} className="FoodCategories_category" style={{ "--bg-image": `url(${category.image})` }}>
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FoodCategories