import FilterByName from "./Filter/FilterByName";
import PropTypes from 'prop-types';

function Filter(props) {
  const { recipeName, setRecipeName } = props;

  return (
    <section className="Filter">
      <h2 className="Filter_title">Búsqueda de recetas</h2>
      <p className="Filter_p">
        Encuentra sugerencias para cocinar según categorías, ingredientes o
        tiempo de preparación.
      </p>
      <form action="">
        <div className="Filter_container">
          <FilterByName recipeName={recipeName} setRecipeName={setRecipeName} />
        </div>
      </form>
    </section>
  );
}

Filter.propTypes = {
  recipeName: PropTypes.string,
  setRecipeName: PropTypes.func
}

export default Filter;
