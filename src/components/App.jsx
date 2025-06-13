import Header from "./App/Header";
import FoodCategories from "./App/FoodCategories";
import Filter from "./App/Filter";
import RecipeList from "./App/RecipeList";
import Footer from "./App/Footer";
import RecipePage from "./App/RecipePage";
import CategoryPage from "./App/CategoryPage";

import { useState } from "react";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";

import recipesData from "../data/recipesData";
import foodCategoriesData from "../data/foodCategoriesData";
import createSlug from "../data/createSlug";
import normalizeSearchText from "../data/normalizeSearchText";

function App() {
  //Display elements
  const [recipeList, setRecipeList] = useState(recipesData);
  const [foodCategoriesList, setFoodCategoriesList] =
    useState(foodCategoriesData);

  // Filter elements
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState("all");
  const [mealTime, setMealTime] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [prepTime, setPrepTime] = useState("all");
  const [ingredients, setIngredients] = useState("");
  const [favorite, setFavorite] = useState("all");

  // FILTERS
  const filterRecipes = recipeList
    // name
    .filter((recipe) =>
      normalizeSearchText(recipe.name).includes(normalizeSearchText(recipeName))
    )
    // category
    .filter((recipe) =>
      category === "all" ? true : recipe.categories.includes(category)
    )
    // mealTime
    .filter((recipe) => mealTime === "all" ? true : recipe.mealTimes.includes(mealTime))
    // difficulty
    .filter((recipe) => difficulty === "all" ? true : recipe.difficulty === difficulty)
    // prepTime
    .filter((recipe) => {
      if (prepTime === "all") return true;
      const prepTimeNumber = parseInt(
        recipe.preparationTime.match(/\d+/)?.[0] || 0
      );

      switch (prepTime) {
        case "lt-15":
          return prepTimeNumber < 15;
        case "lt-30":
          return prepTimeNumber < 30;
        case "lt-60":
          return prepTimeNumber < 60;
        case "mt-60":
          return prepTimeNumber >= 60;
        default:
          return true;
      }
    })
    // ingredients
    .filter((recipe) =>
      normalizeSearchText(recipe.ingredients.join(", ")).includes(
        normalizeSearchText(ingredients)
      )
    )
    // favorite
    .filter((recipe) => {
      if (favorite === "favorite") return recipe.isFavorite === true;
      if (favorite === "not-favorite") return recipe.isFavorite === false;
      return true;
    });

  // RUTAS
  const { pathname } = useLocation();

  // RUTA DE CATEGORÍAS
  const categoryRoute = matchPath("/category/:categoryName", pathname);
  const categoryName = categoryRoute ? categoryRoute.params.categoryName : "";
  const categoryFromList = foodCategoriesData.find(
    (category) => createSlug(category.name) === categoryName
  );

  // RUTA DE RECETA
  const recipeRoute = matchPath("/recipe/:recipeId/:recipeName", pathname);
  const recipeId = recipeRoute ? recipeRoute.params.recipeId : "";
  const recipeFromList = recipeList.find((recipe) => recipe.id == recipeId);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FoodCategories foodCategoriesList={foodCategoriesList} />
              <Filter
                foodCategoriesList={foodCategoriesList}
                recipeName={recipeName}
                setRecipeName={setRecipeName}
                setCategory={setCategory}
                setMealTime={setMealTime}
                difficulty={difficulty} // AÑADIDO
                setDifficulty={setDifficulty} // AÑADIDO
                prepTime={prepTime} // AÑADIDO
                setPrepTime={setPrepTime} // AÑADIDO
                ingredients={ingredients}
                setIngredients={setIngredients}
                favorite={favorite}
                setFavorite={setFavorite}
              />
              <RecipeList recipeList={filterRecipes} />
            </>
          }
        />
        <Route
          path="/category/:category"
          element={
            <CategoryPage category={categoryFromList} recipeList={recipeList} />
          }
        />
        <Route
          path="/recipe/:recipeId/:recipeName"
          element={<RecipePage recipe={recipeFromList} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
