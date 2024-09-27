import { render, screen } from '@testing-library/react';
import { DatePickerProvider } from '../context/DatePickerContext';
import RecurrenceOptions from '../components/RecurrenceOptions';

test('renders recurrence options', () => {
    render(
        <DatePickerProvider>
            <RecurrenceOptions />
        </DatePickerProvider>
    );
    expect(screen.getByText(/Recurrence Options/i)).toBeInTheDocument();
});
