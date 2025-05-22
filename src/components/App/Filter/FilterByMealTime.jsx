import createSlug from "../../../data/createSlug";
import mealTimesData from "../../../data/mealTimesData";

function FilterByMealTime() {

      const allMealTimes = mealTimesData.map((mealTime, index) => (
    <option key={index} value={mealTime.name}>
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