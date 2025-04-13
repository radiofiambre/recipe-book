import Header from './App/Header';
import FoodCategories from './App/FoodCategories';
import RecipeList from './App/RecipeList';
import Footer from './App/Footer';
import RecipePage from './App/RecipePage';
// import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

import recipeList from "../data/recipes";
import foodCategories from "../data/foodCategories";

function App() {

  // const [recipeList, setRecipeList] = useState([]);

  // CREAR RUTAS A CADA RECETA POR SU ID
  const {pathname} = useLocation()
  const routeData = matchPath("/recipe/:recipeId", pathname)
  const recipeId = routeData ? routeData.params.recipeId : ""
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
        <Route path="/recipe/:recipeId" element={<RecipePage recipe={recipeFromList}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;