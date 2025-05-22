import createSlug from "../../../data/createSlug";
import mealTimes from "../../../data/mealTimes";

function FilterByMealTime() {

      const allMealTimes = mealTimes.map((mealTime, index) => (
    <option key={index} value={createSlug(mealTime.name)}>
      {mealTime.name}
    </option>
  ));

  return (
      <>
        <label htmlFor="">Momento del día:</label>
        <select name="" id="">
          <option value="">Selecciona</option>
          {allMealTimes}
        </select>
    </>
  )
}

export default FilterByMealTime