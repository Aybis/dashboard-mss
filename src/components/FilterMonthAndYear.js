import React from 'react';

export default function FilterMonthAndYear({ month, year, handlerChange }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'All',
  ];

  return (
    <div className="mx-auto w-1/3 container grid grid-cols-2 gap-4 mt-6">
      <select
        value={month}
        name="month"
        onChange={(event) => handlerChange(event)}
        className="px-4 py-2 rounded-md bg-white border-2 pr-8 border-gray-200 focus:border-sky-500">
        {months.map((item, index) => (
          <option
            key={Math.random()}
            value={item === 'All' ? 'all' : index + 1}>
            {item}
          </option>
        ))}
      </select>
      <select
        name="year"
        onChange={(event) => handlerChange(event)}
        value={year}
        className="px-4 py-2 rounded-md bg-white border-2 pr-8 border-gray-200 focus:border-sky-500">
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
}
