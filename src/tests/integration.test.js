import { render, screen } from '@testing-library/react';
import { DatePickerProvider } from '../context/DatePickerContext';
import App from '../App';

test('renders the complete date picker app', () => {
    render(
        <DatePickerProvider>
            <App />
        </DatePickerProvider>
    );
    expect(screen.getByText(/Date Picker/i)).toBeInTheDocument();
    expect(screen.getByText(/Recurrence Options/i)).toBeInTheDocument();
    expect(screen.getByText(/Select Start Date/i)).toBeInTheDocument();
});
