import PropTypes from "prop-types";

function FilterByFavorites({ favorite, setFavorite }) {
  const handleCheckbox = (event) => {
    setFavorite(event.target.value);
  };

  return (
    <>
      <label>Favorita:</label>
      <label>
        <input
          type="radio"
          name="favorite"
          value="favorite"
          checked={favorite === "favorite"}
          onChange={handleCheckbox}
        />
        Solo favoritas
      </label>
      <label>
        <input
          type="radio"
          name="favorite"
          value="not-favorite"
          checked={favorite === "not-favorite"}
          onChange={handleCheckbox}
        />
        No favoritas
      </label>
      <label>
        <input
          type="radio"
          name="favorite"
          value="all"
          checked={favorite === "all"}
          onChange={handleCheckbox}
        />
        Todas
      </label>
    </>
  );
}

FilterByFavorites.propTypes = {
  favorite: PropTypes.string,
  setFavorite: PropTypes.func,
};

export default FilterByFavorites;
