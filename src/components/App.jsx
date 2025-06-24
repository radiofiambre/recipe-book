import Header from "./App/Header";
import FoodCategories from "./App/FoodCategories";
import Filter from "./App/Filter";
import RecipeList from "./App/RecipeList";
import Footer from "./App/Footer";
import RecipePage from "./App/RecipePage";
import CategoryPage from "./App/CategoryPage";

import { useState } from "react";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";

import recipeList from "../data/recipesData";
import foodCategoriesList from "../data/foodCategoriesData";
import createSlug from "../data/createSlug";
import normalizeSearchText from "../data/normalizeSearchText";

function App() {
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
    // order newer to older recipes
    .sort((a, b) => b.id - a.id)
    // name
    .filter((recipe) =>
      recipe.name
        ? normalizeSearchText(recipe.name).includes(
            normalizeSearchText(recipeName)
          )
        : false
    )
    // category
    .filter((recipe) =>
      category === "all" ? true : recipe.categories?.includes(category)
    )
    // mealTime
    .filter((recipe) =>
      mealTime === "all" ? true : recipe.mealTimes?.includes(mealTime)
    )
    // difficulty
    .filter((recipe) =>
      difficulty === "all" ? true : recipe.difficulty === difficulty
    )
    // prepTime
    .filter((recipe) => {
      if (prepTime === "all") return true;
      if (!recipe.preparationTime) return false;
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
    .filter((recipe) => {
      if (!ingredients) return true;
      return recipe.ingredients?.length
        ? normalizeSearchText(recipe.ingredients.join(", ")).includes(
            normalizeSearchText(ingredients)
          )
        : false;
    })
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
  const categoryFromList = foodCategoriesList.find(
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
              <h3 className="RecipeList_title">Lista de recetas</h3>
              <p className="RecipeList_p">
                Encuentra sugerencias para cocinar según momento del día,
                ingredientes o tiempo de preparación.
              </p>
              <Filter
                foodCategoriesList={foodCategoriesList}
                recipeName={recipeName}
                setRecipeName={setRecipeName}
                setCategory={setCategory}
                setMealTime={setMealTime}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                prepTime={prepTime}
                setPrepTime={setPrepTime}
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
