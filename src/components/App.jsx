import Header from './App/Header';
import FoodCategories from './App/FoodCategories';
import RecipeList from './App/RecipeList';
import Footer from './App/Footer';
import RecipePage from './App/RecipePage';
import CategoryPage from './App/CategoryPage';
// import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

import recipeList from "../data/recipes";
import foodCategories from "../data/foodCategories";

function App() {

  // const [recipeList, setRecipeList] = useState([]);

  const {pathname} = useLocation()
  
  // CREAR PÁGINAS DE CATEGORÍAS
  const categoryRoute = matchPath("/category/:categoryName", pathname)
  const categoryName = categoryRoute ? categoryRoute.params.categoryName : ""
  const categoryFromList = foodCategories.find(category => category.name == categoryName)

  // CREAR RUTAS A CADA RECETA POR SU ID
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
        <Route path="/category/:category" element={<CategoryPage category={categoryFromList} />}/>
        <Route path="/recipe/:recipeId/:recipeName" element={<RecipePage recipe={recipeFromList}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;