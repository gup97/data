import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./InputDate.css";
import { FilterIcon } from "components/FilterIcon";
// import { getDate } from "date-fns";
export const InputDate = ({ data, setData }) => {
  if (Object.keys(data).includes("seconds")) {
    data = new Date(data.seconds * 1000);
  }

  return (
    <DatePicker
      withPortal
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
      dateFormat="yyyy년 MM월 dd일"
      onChange={(e) => setData((state) => ({ ...state, date: e }))}
      selected={data}
      locale={ko}
      renderCustomHeader={renderHeaderContents}
      disabledKeyboardNavigation
      calendarClassName="input-date" // worksworks
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
    <div className="flex justify-between">
      <div className="absolute bottom-20 text-white font-sans font-bold w-full"></div>
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
  );
};

export const FilterDate = ({ dateFiltering, date, setDate }) => {
  const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
    <button type="button" onClick={onClick} ref={ref}>
      <FilterIcon />
    </button>
  ));
  return (
    <DatePicker
      withPortal
      selected={date}
      locale={ko}
      onChange={(e) => {
        setDate(e);
        dateFiltering();
      }}
      customInput={<ExampleCustomInput />}
      renderCustomHeader={renderHeaderContents}
    />
  );
};
export const ShowDate = ({ date }) => {
  return (
    <span>
      {date.toLocaleString("ko", {
        month: "long",
        year: "numeric",
        day: "numeric",
      })}
      부터 습득된 데이터입니다.
    </span>
  );
};
