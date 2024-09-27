import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const DatePicker = () => {
    const { recurrence, setRecurrence } = useDatePicker();

    const handleDateChange = (e) => {
        setRecurrence({ ...recurrence, startDate: new Date(e.target.value) });
    };

    return (
        <div>
            <h3>Select Start Date</h3>
            <input className='form-control' type="date" onChange={handleDateChange} />
        </div>
    );
};

export default DatePicker;

