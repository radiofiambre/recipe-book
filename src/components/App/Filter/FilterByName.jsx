import PropTypes from 'prop-types';

function FilterByName({ recipeName, setRecipeName }) {

  const handleInput = (event) => {
    setRecipeName(event.target.value.toLowerCase())
  }

  return (
    <div className="filterContainer">
      <label htmlFor="">Nombre:</label>
      <input type="text" value={recipeName} placeholder="Busca una receta..." onChange={handleInput}/>
    </div>
  )
}

FilterByName.propTypes = {
  recipeName: PropTypes.string,
  setRecipeName: PropTypes.func
}

export default FilterByName