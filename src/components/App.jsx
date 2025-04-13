import Header from './App/Header';
import Landing from './App/Landing';
import Footer from './App/Footer';
import RecipePage from './App/RecipePage/RecipePage';
// import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

import recipes from "../data/recipes";

function App() {

  // const [recipeList, setRecipeList] = useState([]);

  // CREAR RUTAS A CADA RECETA POR SU ID
  const {pathname} = useLocation()
  const routeData = matchPath("/recipe/:recipeId", pathname)
  const recipeIdUrl = routeData ? routeData.params.recipeId : ""
  const recipeInfo = recipes.find(recipe => recipe.id === recipeIdUrl)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipe/:recipeId" element={<RecipePage recipeInfo={recipeInfo}/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;