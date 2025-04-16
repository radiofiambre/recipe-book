import Header from './App/Header';
import FoodCategories from './App/FoodCategories';
import Filter from './App/Filter';
import RecipeList from './App/RecipeList';
import Footer from './App/Footer';
import RecipePage from './App/RecipePage';
import CategoryPage from './App/CategoryPage';

import { useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

import recipeListData from "../data/recipes";
import foodCategoriesData from "../data/foodCategories";

import createSlug from "../data/createSlug";

function App() {

  const [recipeList, setRecipeList] = useState(recipeListData)
  const [foodCategories, setFoodCategories] = useState(foodCategoriesData)
  const [recipeName, setRecipeName] = useState([])

  // FILTROS
  const filterRecipes = recipeList
    .filter((recipe) => recipe.name.toLowerCase().includes(recipeName))
  // FILTRAR POR NOMBRE
  // const filterRecipesByName = recipeList.filter((recipe) => recipe.name.toLowerCase().includes(recipeName))

  // FILTRAR POR CATEGORÍA
  // const filterRecipesByCategory = recipeList.filter((recipe) => recipe.categories.includes(category))



  // RUTAS
  const {pathname} = useLocation()
  
  // RUTA DE CATEGORÍAS
  const categoryRoute = matchPath("/category/:categoryName", pathname)
  const categoryName = categoryRoute ? categoryRoute.params.categoryName : ""
  const categoryFromList = foodCategories.find(category => createSlug(category.name) == categoryName)

  // RUTA DE RECETA
  const recipeRoute = matchPath("/recipe/:recipeId/:recipeName", pathname)
  const recipeId = recipeRoute ? recipeRoute.params.recipeId : ""
  const recipeFromList = recipeList.find(recipe => recipe.id == recipeId)



  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <FoodCategories foodCategories={foodCategories} />
            <Filter recipeName={recipeName} setRecipeName={setRecipeName} />
            <RecipeList recipeList={filterRecipes} />
          </>
        }
        />
        <Route path="/category/:category" element={<CategoryPage category={categoryFromList} recipeList={recipeList} />}/>
        <Route path="/recipe/:recipeId/:recipeName" element={<RecipePage recipe={recipeFromList} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;