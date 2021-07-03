import React from "react";

const FilterTasks = ({ value, handleFilter }) => (
  <form>
    <label>
      Start typing task text:{" "}
      <input type="text" onChange={handleFilter} value={value} />
    </label>
  </form>
);

export default FilterTasks;
