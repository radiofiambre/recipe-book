import PropTypes from "prop-types";

function FilterByPrepTime({ setPrepTime }) {
  const handleSelect = (event) => setPrepTime(event.target.value);

  return (
    <>
      <label className="filterName" htmlFor="">Tiempo</label>
      <select name="" defaultValue="all" onChange={handleSelect}>
        <option value="">Todos</option>
        <option value="lt-15">&lt; 15 minutos</option>
        <option value="lt-30">&lt; 30 minutos</option>
        <option value="lt-60">&lt; 1 hora</option>
        <option value="mt-60">Más de 1 hora</option>
      </select>
    </>
  );
}

FilterByPrepTime.propTypes = {
  setPrepTime: PropTypes.func,
};

export default FilterByPrepTime;
