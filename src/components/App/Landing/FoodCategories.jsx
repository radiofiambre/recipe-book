// import '../../../styles/FoodCategories';

function FoodCategories() {

  const categories = [
    { name: 'Arroz', image: '/food_categories/rice.png'},
    { name: 'Bebidas y cócteles', image: '/food_categories/beverages.jpg'},
    { name: 'Carnes y Aves', image: '/food_categories/meat.jpg'},
    { name: 'Ensaladas', image: '/food_categories/salads.jpg'},
    { name: 'Huevos y patatas', image: '/food_categories/eggs.png'},
    { name: 'Legumbres y guisos', image: '/food_categories/legumes.jpg'},
    { name: 'Pasta', image: '/food_categories/pasta.jpg'},
    { name: 'Pescados y marisco', image: '/food_categories/fish.jpg'},
    { name: 'Pan, masas y rebozados', image: '/food_categories/bread.jpg'},
    { name: 'Postres y dulces', image: '/food_categories/desserts.jpg'},
    { name: 'Salsas y guarniciones', image: '/food_categories/dressings.png'},
    { name: 'Sopas, caldos y cremas', image: '/food_categories/soups.jpeg'},
    { name: 'Tapas y aperitivos', image: '/food_categories/appetizers.jpg'},
    { name: 'Verduras y hortalizas', image: '/food_categories/vegetables.jpg'}
  ]

  return (
    <section className="FoodCategories">
      <ul className="FoodCategories_list">
        {categories.map((category, index) => (
          <li key={index} className="FoodCategories_category" style={{ "--bg-image": `url(${category.image})` }}           >
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FoodCategories