import Header from './App/Header';
import FoodCategories from './App/FoodCategories';
import RecipeList from './App/RecipeList';
import Footer from './App/Footer';
import RecipePage from './App/RecipePage';
// import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

import recipes from "../data/recipes";
import foodCategories from "../data/foodCategories";

function App() {

  // const [recipeList, setRecipeList] = useState([]);

  // CREAR RUTAS A CADA RECETA POR SU ID
  const {pathname} = useLocation()
  const routeData = matchPath("/recipe/:recipeId", pathname)
  const recipeIdUrl = routeData ? routeData.params.recipeId : ""
  const recipeInfo = recipes.find(recipe => recipe.id === recipeIdUrl)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <FoodCategories foodCategories={foodCategories}></FoodCategories>
            <RecipeList recipes={recipes}></RecipeList>
          </>
        }
        />
        <Route path="/recipe/:recipeId" element={<RecipePage recipeInfo={recipeInfo}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;