import React from 'react';
import DatePicker from 'react-datepicker';

const DateSelection = (props) => {
  return (
    <div className='card-date'>
      <DatePicker selected={props.selected} onChange={props.handleChange} />
    </div>
  );
};

export default DateSelection;
