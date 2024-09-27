import React, { useState } from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
    const { recurrence, setRecurrence } = useDatePicker();

    const handleFrequencyChange = (e) => {
        setRecurrence({ ...recurrence, frequency: e.target.value });
    };

    const handleIntervalChange = (e) => {
        setRecurrence({ ...recurrence, interval: parseInt(e.target.value) });
    };
    const [useName, setUseName] = useState("")
    return (
        <div>
            <div className='recurrence-style'>
                <label>
                    Frequency:
                    <select className='form-control' value={recurrence.frequency} onChange={handleFrequencyChange}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </label>
                <label>
                    Type:
                    <input
                        className='form-control'
                        type="number"
                        value={recurrence.interval}
                        onChange={handleIntervalChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default RecurrenceOptions;
