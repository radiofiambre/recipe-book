import createSlug from "../../../data/createSlug";
import difficultyLevels from "../../../data/difficultyLevels";

function FilterByDifficulty() {
  const allDifficultyLevels = difficultyLevels.map((difficultyLevel, index) => (
    <option key={index} value={createSlug(difficultyLevel.name)}>
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
