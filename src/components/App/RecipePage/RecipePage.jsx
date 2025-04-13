import Footer from "../Footer"
import Header from "../Header"
import RecipePage_Picture from "./RecipePage_Picture"
import RecipePage_Info from "./RecipePage_Info"

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