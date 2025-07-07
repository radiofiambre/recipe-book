// import RecipeCard from "./RecipeList/RecipeCard";
// import PropTypes from "prop-types";

// function RecipeList({ recipeList }) {
//   return (
//     <section className="RecipeList pageSection">
//       {recipeList.length === 0 ? (
//         <p className="recipeNotFoundMessage">
//           No se han encontrado recetas.
//         </p>
//       ) : (
//         <ul className="RecipeList_container">
//           {recipeList.map((recipe) => (
//             <RecipeCard
//               key={recipe.id}
//               id={recipe.id}
//               name={recipe.name}
//               image={recipe.image}
//               prepTime={recipe.preparationTime}
//             />
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// }

// RecipeList.propTypes = {
//   recipeList: PropTypes.array,
// };

// export default RecipeList;


import RecipeCard from "./RecipeList/RecipeCard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function RecipeList({ recipeList }) {
  const [visibleRecipes, setVisibleRecipes] = useState(15); // Empezamos con 5 filas (15 recetas en desktop)
  const [recipesPerRow, setRecipesPerRow] = useState(3);

  // Función para calcular recetas por fila según el tamaño de pantalla
  const calculateRecipesPerRow = () => {
    const width = window.innerWidth;
    
    if (width >= 1920) { // extra-large-screens
      return 6;
    } else if (width >= 1440) { // large-screens
      return 5;
    } else if (width >= 1024) { // notebook
      return 4;
    } else { // tablet (768px+), big-mobile (480px+), mobile (<480px) - todos usan 3 columnas
      return 3;
    }
  };

  // Efecto para actualizar el número de recetas por fila al cambiar el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      const newRecipesPerRow = calculateRecipesPerRow();
      setRecipesPerRow(newRecipesPerRow);
      
      // Ajustar visibleRecipes para mantener 5 filas iniciales
      setVisibleRecipes(newRecipesPerRow * 5);
    };

    // Configurar el valor inicial
    handleResize();

    // Agregar listener para resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para cargar más recetas (2 filas adicionales)
  const loadMoreRecipes = () => {
    setVisibleRecipes(prev => prev + (recipesPerRow * 2));
  };

  // Recetas a mostrar
  const recipesToShow = recipeList.slice(0, visibleRecipes);
  
  // Verificar si hay más recetas para mostrar
  const hasMoreRecipes = visibleRecipes < recipeList.length;

  return (
    <section className="RecipeList pageSection">
      {recipeList.length === 0 ? (
        <p className="recipeNotFoundMessage">
          No se han encontrado recetas.
        </p>
      ) : (
        <>
          <ul className="RecipeList_container">
            {recipesToShow.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                image={recipe.image}
                prepTime={recipe.preparationTime}
              />
            ))}
          </ul>
          
          {hasMoreRecipes && (
            <div className="RecipeList_loadMore">
              <button 
                className="RecipeList_loadMoreButton"
                onClick={loadMoreRecipes}
                aria-label="Cargar más recetas"
              >
                +
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
};

export default RecipeList;