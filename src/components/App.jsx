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

  // FILTROS
  const filterRecipes = recipeList
    .filter((recipe) =>
      normalizeSearchText(recipe.name).includes(normalizeSearchText(recipeName))
    )
    .filter((recipe) =>
      normalizeSearchText(recipe.ingredients.join(", ")).includes(
        normalizeSearchText(ingredients)
      )
    );

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
