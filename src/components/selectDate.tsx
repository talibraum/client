import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { Dayjs } from "dayjs";
import "./selectDate.css";

interface SelectDateProps {
  text: string;
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
}

export default function SelectDate({ text, selectedDate, setSelectedDate }: SelectDateProps) {
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          label={text}
          value={selectedDate}
          onChange={handleDateChange}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
