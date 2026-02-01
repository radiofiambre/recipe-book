import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getRecipeImageUrl } from "../../../utils/getRecipeImageUrl"
import createSlug from "../../../utils/createSlug";

function RecipeCard(props) {
  const { id, name, image, prepTime } = props;
  const imageUrl = getRecipeImageUrl(image)

  return (
    <Link to={`/recipe/${id}/${createSlug(name)}`}>
      <li className="RecipeCard_listElement">
        <article className="RecipeCard">
          <img className="RecipeCard_Img" alt={name} src={imageUrl}/>
          <div className="RecipeCard_textContainer">
            <h6 className="RecipeCard_textCategory">{prepTime}</h6>
            <h4 className="RecipeCard_textName">{name}</h4>
          </div>
        </article>
      </li>
    </Link>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  prepTime: PropTypes.string,
};

export default RecipeCard;
