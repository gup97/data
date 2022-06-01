import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./InputDate.css";
// import { getDate } from "date-fns";
export const InputDate = ({ data, setData }) => {
  return (
    <DatePicker
      withPortal
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
      dateFormat="yyyy년 MM월 dd일"
      selected={data}
      name="date"
      value={data}
      onChange={(e) => {
        setData((state) => ({
          ...state,
          date: e,
        }));
      }}
      locale={ko}
      renderCustomHeader={renderHeaderContents}
      disabledKeyboardNavigation
      calendarClassName="test" // worksworks
    ></DatePicker>
  );
};

const renderHeaderContents = ({
  monthDate,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  return (
    <div className="datePickerHeader">
      <div className="flex justify-between">
        <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className=" text-xl font-bold font-sans">
          {monthDate.toLocaleString("ko", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
