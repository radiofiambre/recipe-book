import PropTypes from "prop-types";
import mealTimesData from "../../../data/mealTimesData";

function FilterByMealTime({ setMealTime }) {
  const allMealTimes = mealTimesData.map((mealTimeData, index) => (
    <option key={index} value={mealTimeData.name}>
      {mealTimeData.name}
    </option>
  ));

  const handleSelect = (event) => {
    setMealTime(event.target.value)
  };

  return (
    <>
      <label className="filterName" htmlFor="">Momento del día</label>
      <select name="" defaultValue="all" onChange={handleSelect}>
        <option value="all">Todos</option>
        {allMealTimes}
      </select>
    </>
  );
}

FilterByMealTime.propTypes = {
  setMealTime: PropTypes.func,
};

export default FilterByMealTime;
