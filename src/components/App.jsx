import Header from './App/Header';
import FoodCategories from './App/FoodCategories';
import RecipeList from './App/RecipeList';
import Footer from './App/Footer';
import RecipePage from './App/RecipePage';
import CategoryPage from './App/CategoryPage';
import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

import recipeList from "../data/recipes";
import foodCategories from "../data/foodCategories";

import createSlug from "../data/createSlug";

function App() {

  // const [recipeList, setRecipeList] = useState([])
  // const [category, setCategory] = useState([])

  // // FILTROS
  // // FILTRO DE CATEGORÍAS
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
            <FoodCategories foodCategories={foodCategories}></FoodCategories>
            <RecipeList recipeList={recipeList}></RecipeList>
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