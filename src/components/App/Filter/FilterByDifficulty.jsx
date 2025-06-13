import PropTypes from "prop-types";
import difficultyLevelsData from "../../../data/difficultyLevelsData";

function FilterByDifficulty({ difficulty, setDifficulty }) {
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
      <label htmlFor="">Dificultad:</label>
      <select name="" defaultValue="all" onChange={handleSelect}>
        <option value="all">Todas</option>
        {allDifficultyLevels}
      </select>
    </>
  );
}

FilterByDifficulty.propTypes = {
  difficulty: PropTypes.string,
  setDifficulty: PropTypes.func,
};

export default FilterByDifficulty;
