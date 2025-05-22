import Header from "./App/Header";
import FoodCategories from "./App/FoodCategories";
import Filter from "./App/Filter";
import RecipeList from "./App/RecipeList";
import Footer from "./App/Footer";
import RecipePage from "./App/RecipePage";
import CategoryPage from "./App/CategoryPage";

import { useState } from "react";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";

import recipeListData from "../data/recipes";
import foodCategoriesData from "../data/foodCategories";

import createSlug from "../data/createSlug";
import normalizeSearchText from "../data/normalizeSearchText";

function App() {
  const [recipeList, setRecipeList] = useState(recipeListData);
  const [foodCategories, setFoodCategories] = useState(foodCategoriesData);
  const [ingredients, setIngredients] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [favorite, setFavorite] = useState("all");

  // FILTROS
  const filterRecipes = recipeList
    // nombre
    .filter((recipe) =>
      normalizeSearchText(recipe.name).includes(normalizeSearchText(recipeName))
    )
    //ingrediente
    .filter((recipe) =>
      normalizeSearchText(recipe.ingredients.join(", ")).includes(
        normalizeSearchText(ingredients)
      )
    )
    //favorita
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
  const categoryFromList = foodCategories.find(
    (category) => createSlug(category.name) == categoryName
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
              <FoodCategories foodCategories={foodCategories} />
              <Filter
                foodCategories={foodCategories}
                recipeName={recipeName}
                setRecipeName={setRecipeName}
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
