import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const CalendarPreview = () => {
    const { recurrence } = useDatePicker("");

    const generateDates = () => {
        const dates = [];
        const { frequency, interval, startDate, endDate } = recurrence;
        let currentDate = new Date(startDate);

        while (endDate ? currentDate <= endDate : dates.length < 30) {
            dates.push(new Date(currentDate));
            if (frequency === 'daily') {
                currentDate.setDate(currentDate.getDate() + interval);
            } else if (frequency === 'weekly') {
                currentDate.setDate(currentDate.getDate() + interval * 7);
            } else if (frequency === 'monthly') {
                currentDate.setMonth(currentDate.getMonth() + interval);
            } else if (frequency === 'yearly') {
                currentDate.setFullYear(currentDate.getFullYear() + interval);
            }
        }
        return dates;
    };

    const dates = generateDates();

    return (

        <div>
            <h3>Selected Dates</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {!dates ? [] : dates.map((date, index) => (
                        <tr key={index}>
                            <td>{date.toLocaleDateString()}</td>
                            <td>{recurrence.interval}</td>
                            <td>{recurrence.frequency.charAt(0).toUpperCase() + recurrence.frequency.slice(1)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalendarPreview;
