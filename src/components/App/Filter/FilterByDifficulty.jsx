import difficultyLevelsData from "../../../data/difficultyLevelsData";

function FilterByDifficulty() {
  const allDifficultyLevels = difficultyLevelsData.map((difficultyLevel, index) => (
    <option key={index} value={difficultyLevel.name}>
      {difficultyLevel.name}
    </option>
  ));

  return (
    <>
      <label htmlFor="">Dificultad:</label>
      <select name="" id="">
        <option value="">Selecciona</option>
        {allDifficultyLevels}
      </select>
    </>
  );
}

export default FilterByDifficulty;
