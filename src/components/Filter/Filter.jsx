import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter">
      Filter
      <br></br>
      <input type="text" value={value} name="filter" onChange={onChange} />
    </label>
  );
};

export default Filter;
