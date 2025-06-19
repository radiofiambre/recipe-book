import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import createSlug from "../../data/createSlug";
import recipeImages from '../../assets/recipes';

function RecipeCard(props) {
  const { id, name, image, prepTime } = props;

  return (
    <Link to={`/recipe/${id}/${createSlug(name)}`}>
      <li className="RecipeCard_listElement">
        <article className="RecipeCard">
          <img className="RecipeCard_Img" alt={name} src={recipeImages[image]}/>
          <div className="RecipeCard_textContainer">
            <h6 className="RecipeCard_textPrepTime">{prepTime}</h6>
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
