const recipes = [
  {
    id: 1,
    name: "Ensalada de mango",
    image: "/recipes/ensalada-de-mango.png",
    categories: ["Ensaladas"],
    difficulty: "Fácil",
    mealTime: ["Comida", "Cena"],
    servings: "4 raciones",
    preparationTime: "15 min",
    ingredients: ["Mango", "Espinacas", "Arándanos", "Queso feta", "Nueces", "Miel"],
    directions: [
      "Cortar los ingredientes al tamaño deseado.",
      "Montar en un bowl, aliñar con la miel y servir."],
    notes: "",
    source: "",
    isFavorite: false,
    cookedTimes: 0
  },
  {
    id: 2,
    name: "Arroz con pollo al curry",
    image: "/recipes/arroz-con-pollo-al-curry.jpeg",
    categories: ["Arroz", "Carnes y aves"],
    difficulty: "Media",
    mealTime: ["Comida", "Cena"],
    servings: "2 raciones",
    preparationTime: "30 min",
    ingredients: ["160 ml arroz basmati", "1 pechuga de pollo", "1 cebolla", "1 diente de ajo", "Salsa de curri: 2 cucharadas de curry, pasta de tomate y leche de coco"],
    directions: [
      "Cocer aparte el arroz y reservar.", 
      "Picar la cebolla muy fina, picar el ajo y freír en la sartén a fuego bajo-medio hasta que la cebolla se quede transparente.",
      "Añadir una cucharada de pasta de tomate y 2 cucharadas de curry en polvo.",
      "Cortar la pechuga de pollo en dados, salpimentar y añadir a la sartén. Sofreír hasta que quede dorada.",
      "Verter la leche de coco o la nata con coco en polvo y dejar cocinar unos 10 minutos, hasta que la salsa espese.",
      "Servir una base de arroz y encima el pollo con salsa de curry."
    ],
    notes: "",
    source: "https://cocinaconcoqui.com/katsu-curry-japones/",
    isFavorite: false,
    cookedTimes: 2
  },
  {
    id: 3,
    name: "Pan de aceitunas",
    image: "/recipes/pan-de-aceitunas.jpg",
    categories: ["Pan, masas y rebozados"],
    difficulty: "Fácil",
    mealTime: ["Desayuno"],
    servings: "4 raciones",
    preparationTime: "15 min",
    ingredients: ["Mango", "Espinacas", "Arándanos", "Queso feta", "Nueces", "Miel"],
    directions: ["Cortar los ingredientes al tamaño deseado.", "Montar en un bowl, aliñar con la miel y servir."],
    notes: "",
    source: "",
    isFavorite: true,
    cookedTimes: 0
  },
  {
    id: 4,
    name: "Tosta de tortilla francesa y aguacate",
    image: "/recipes/tosta-de-tortilla-francesa-y-aguacate.jpg",
    categories: ["Tapas y aperitivos"],
    difficulty: "Fácil",
    mealTimes: ["Desayuno", "Cena"],
    servings: "4 raciones",
    preparationTime: "15 min",
    ingredients: ["Mango", "Espinacas", "Arándanos", "Queso feta", "Nueces", "Miel"],
    directions: ["Cortar los ingredientes al tamaño deseado.", "Montar en un bowl, aliñar con la miel y servir."],
    notes: "",
    source: "",
    isFavorite: false,
    cookedTimes: 2
  },
];

export default recipes;