import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default Calender;
