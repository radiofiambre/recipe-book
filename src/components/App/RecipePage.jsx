import Footer from "./Footer"
import Header from "./Header"
import RecipePage_Picture from "./RecipePage/RecipePage_Picture"
import RecipePage_Info from "./RecipePage/RecipePage_Info"

function RecipePage() {
  return (
    <>
      <Header/>
      <RecipePage_Info/>
      <RecipePage_Picture/>
      <Footer/>
    </>
  )
}

export default RecipePage