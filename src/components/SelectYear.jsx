import React from 'react';

const SelectYear = ({years, SelectYear}) => {
  return (
    <select onChange={SelectYear}>
      <option value="Select a year">Select a year</option>
      {years
        .map((year)=>
          <option key={year} value={year}>{year}</option>
        )
      }
    </select>
  );
}

export default SelectYear;