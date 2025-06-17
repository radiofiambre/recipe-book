import PropTypes from "prop-types";

function FilterByFavorites({ favorite, setFavorite }) {
  const handleCheckbox = (event) => {
    setFavorite(event.target.value);
  };

  return (
    <>
      <label className="filterName">Favorita</label>
      <section className="radioContainer">
        <label className="radioLabel">
          <input
            type="radio"
            name="favorite"
            value="all"
            checked={favorite === "all"}
            onChange={handleCheckbox}
          />
          Todas
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            name="favorite"
            value="favorite"
            checked={favorite === "favorite"}
            onChange={handleCheckbox}
          />
          Sí
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            name="favorite"
            value="not-favorite"
            checked={favorite === "not-favorite"}
            onChange={handleCheckbox}
          />
          No
        </label>
      </section>
    </>
  );
}

FilterByFavorites.propTypes = {
  favorite: PropTypes.string,
  setFavorite: PropTypes.func,
};

export default FilterByFavorites;
