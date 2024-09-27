import React, { createContext, useContext, useState } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
    const [recurrence, setRecurrence] = useState({
        frequency: 'daily',
        interval: 1,
        daysOfWeek: [],
        nthDay: null,
        startDate: new Date(),
        endDate: null,
    });

    return (
        <DatePickerContext.Provider value={{ recurrence, setRecurrence }}>
            {children}
        </DatePickerContext.Provider>
    );
};

export const useDatePicker = () => useContext(DatePickerContext);
