function FilterByPrepTime() {
  return (
    <>
      <label htmlFor="">Tiempo:</label>
      <select name="" id="">
        <option value="lt-15">&lt; 15 minutos</option>
        <option value="lt-30">&lt; 30 minutos</option>
        <option value="lt-60">&lt; 1 hora</option>
        <option value="mt-60">Más de 1 hora</option>
      </select>
    </>
  );
}

export default FilterByPrepTime;
