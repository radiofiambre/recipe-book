import PropTypes from "prop-types";
import mealTimesData from "../../../data/mealTimesData";

function FilterByMealTime({setMealTime}) {

      const allMealTimes = mealTimesData.map((mealTime, index) => (
    <option key={index} value={mealTime.name}>
      {mealTime.name}
    </option>
  ));

  const handleSelect = (event) => setMealTime(event.target.value)

  return (
      <>
        <label htmlFor="">Momento del día:</label>
        <select name="" id="" onChange={handleSelect}>
          <option value="all">Todas</option>
          {allMealTimes}
        </select>
    </>
  )
}

FilterByMealTime.propTypes = {
  setMealTime: PropTypes.func
}

export default FilterByMealTime