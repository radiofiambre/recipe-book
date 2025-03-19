// import '../../../styles/FoodCategories';

function FoodCategories() {

  const categories = [
    { name: 'Arroz', image: '../../../public/food_categories/rice.png'},
    { name: 'Bebidas y cócteles', image: '../../../public/food_categories/beverages.jpg'},
    { name: 'Carnes y Aves', image: '../../../public/food_categories/meat.jpg'},
    { name: 'Ensaladas', image: '../../../public/food_categories/salads.jpg'},
    { name: 'Huevos y patatas', image: '../../../public/food_categories/eggs.png'},
    { name: 'Legumbres y guisos', image: '../../../public/food_categories/legumes.jpg'},
    { name: 'Pasta', image: '../../../public/food_categories/pasta.jpg'},
    { name: 'Pescados y marisco', image: '../../../public/food_categories/fish.jpg'},
    { name: 'Pan, masas y rebozados', image: '../../../public/food_categories/bread.jpg'},
    { name: 'Postres y dulces', image: '../../../public/food_categories/desserts.jpg'},
    { name: 'Salsas y guarniciones', image: '../../../public/food_categories/dressings.png'},
    { name: 'Sopas, caldos y cremas', image: '../../../public/food_categories/soups.jpeg'},
    { name: 'Tapas y aperitivos', image: '../../../public/food_categories/appetizers.jpg'},
    { name: 'Verduras y hortalizas', image: '../../../public/food_categories/vegetables.jpg'}
  ]

  return (
    <section className="FoodCategories">
      <ul className="FoodCategories_list">
        {categories.map((category, index) => (
          <li
            key={index}
            className="FoodCategories_category"
            style={{ "--bg-image": `url(${category.image})` }}
          >
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FoodCategories