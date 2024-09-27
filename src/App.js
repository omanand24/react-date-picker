
import './App.css';
import CalendarPreview from './context/CalendarPreview';
import DatePicker from './context/DatePicker';
import { DatePickerProvider } from './context/DatePickerContext';
import Header from './context/Header';
import RecurrenceOptions from './context/RecurrenceOptions';

function App() {
  return (
    <DatePickerProvider>
      <div>
        <Header />
        <RecurrenceOptions />
        <DatePicker />
        <CalendarPreview />
      </div>
    </DatePickerProvider>
  );
}

export default App;
