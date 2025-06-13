import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import createSlug from "../../../data/createSlug";

function RecipeCard(props) {
  const { id, name, image, categories } = props;

  return (
    <Link to={`/recipe/${id}/${createSlug(name)}`}>
      <li className="RecipeCard_listElement">
        <article className="RecipeCard">
          <img className="RecipeCard_Img" alt={name} src={image} />
          <div className="RecipeCard_textContainer">
            {categories.map((category, index) => (
              <h6 className="RecipeCard_textCategory" key={index}>
                {category}
                {index < categories.length - 1 ? ", " : ""}
              </h6>
            ))}
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
  categories: PropTypes.array,
};

export default RecipeCard;
