import PropTypes from "prop-types";
import difficultyLevelsData from "../../../data/difficultyLevelsData";

function FilterByDifficulty({ setDifficulty }) {
  const allDifficultyLevels = difficultyLevelsData.map(
    (difficultyLevelData, index) => (
      <option key={index} value={difficultyLevelData.name}>
        {difficultyLevelData.name}
      </option>
    )
  );

  const handleSelect = (event) => setDifficulty(event.target.value);

  return (
    <>
      <label className="filterName" htmlFor="">Dificultad</label>
      <select name="" defaultValue="all" onChange={handleSelect}>
        <option value="all">Todas</option>
        {allDifficultyLevels}
      </select>
    </>
  );
}

FilterByDifficulty.propTypes = {
  setDifficulty: PropTypes.func,
};

export default FilterByDifficulty;
