import React from 'react';

const SelectMonth = ({months, selectMonth}) => {
  return (
    <select onChange={selectMonth}>
        <option value="Select a month">Select a month</option>
        {months
          .map((month)=>
            <option key={month} value={month}>{month}</option>
          )
        }
    </select>
  );
}

export default SelectMonth;
