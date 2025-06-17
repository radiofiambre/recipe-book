import PropTypes from "prop-types";

function FilterByName({ recipeName, setRecipeName }) {
  const handleInput = (event) => {
    setRecipeName(event.target.value.toLowerCase());
  };

  return (
    <>
      <label className="filterName" htmlFor="">Nombre</label>
      <input
        type="text"
        value={recipeName}
        placeholder="Escribe..."
        onChange={handleInput}
      />
    </>
  );
}

FilterByName.propTypes = {
  recipeName: PropTypes.string,
  setRecipeName: PropTypes.func,
};

export default FilterByName;
